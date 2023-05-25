import React, { useEffect, useState } from 'react';
import { useTitle } from '../useCustom/useCustom';
import banner from '../../assets/shop/banner2.jpg'
import { useLoaderData, useParams } from 'react-router-dom';
import FoodCart from './FoodCart';
import { BarLoader } from 'react-spinners';

const Shop = () => {
    useTitle('Shop')
    const item = useParams().text
    const [tf, setTf] = useState(false)
    const [data, setData] = useState([])
    const [text, setText] = useState(item)
    useEffect(() => {
        setTf(false)
        fetch(`http://localhost:5000/category/${text}`)
            .then(res => res.json()).then(data => {
                setTf(true)
                setData(data)
            })
    }, [text])
    return (
        <div>
            <div style={{ backgroundImage: `url('${banner}')` }} className='bg-center md:px-28 bg-cover bg-no-repeat text-center py-44'>
                <div className='bg-black text-white py-16 md:py-24 bg-opacity-40 px-3 '>
                    <h3 className='text-5xl font-semibold uppercase mb-4'>our shop</h3>
                    <p>would you like our dish please try it</p>
                </div>
            </div>
            <div className='flex  justify-center gap-8 my-11'>
                <h3 onClick={() => setText('salad')} className={`font-semibold cursor-pointer text-base ${text === 'salad' ? 'text-orange-500 border-b-2 pb-1 border-orange-500' : ''}`}>Salad</h3>
                <h3 onClick={() => setText('pizza')} className={`font-semibold cursor-pointer text-base ${text === 'pizza' ? 'text-orange-500 border-b-2 pb-1 border-orange-500' : ''}`}>pizza</h3>
                <h3 onClick={() => setText('dessert')} className={`font-semibold cursor-pointer text-base ${text === 'dessert' ? 'text-orange-500 border-b-2 pb-1 border-orange-500' : ''}`}>dessert</h3>
                <h3 onClick={() => setText('soup')} className={`font-semibold cursor-pointer text-base ${text === 'soup' ? 'text-orange-500 border-b-2 pb-1 border-orange-500' : ''}`}>soup</h3>
            </div>
            {!tf ? <div className="text-center flex justify-center"><BarLoader color="#36d7b7" /></div>
                : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {data.map(d => <FoodCart key={d._id} d={d} ></FoodCart>)}
                </div>}
        </div>
    );
};

export default Shop;