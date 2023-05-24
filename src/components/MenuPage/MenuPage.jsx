import React from 'react';
import { useTitle } from '../useCustom/useCustom';
import Cover from '../shared/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import SecTitle from '../shared/SecTitle/SecTitle';
import { useLoaderData, useLocation } from 'react-router-dom';
import Menu from '../Sec4/Menu';
import CommonButton from '../shared/CommonButton/CommonButton';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'

const MenuPage = () => {
    useTitle('Menu')
    const data = useLoaderData()
    const populer = data.filter(d => d.category === 'offered')
    const desert = data.filter(d => d.category === 'dessert')
    const pizza = data.filter(d => d.category === 'pizza')
    const salad = data.filter(d => d.category === 'salad')
    const soup = data.filter(d => d.category === 'soup')
    return (
        <div>
            <div style={{ backgroundImage: `url('${banner}')` }} className='bg-center md:px-28 bg-cover bg-no-repeat text-center py-44'>
                <div className='bg-black text-white py-16 md:py-24 bg-opacity-40 px-3 '>
                    <h3 className='text-5xl font-semibold uppercase mb-4'>our menu</h3>
                    <p>would you like our dish please try it</p>
                </div>
            </div>


            <SecTitle one={'dont miss'} two={'todays offer'}></SecTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-2'>
                {populer.map(p => <Menu key={p._id} d={p}></Menu>)}
            </div>
            <CommonButton></CommonButton>


            <Cover img={dessertImg} title={'dessert'} body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <div className='grid mt-28 grid-cols-1 md:grid-cols-2 gap-7 p-2'>
                {desert.slice(0, 6).map(p => <Menu key={p._id} d={p}></Menu>)}
            </div>
            <CommonButton></CommonButton>


            <Cover img={pizzaImg} title={'pizza'} body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <div className='grid grid-cols-1 mt-28 md:grid-cols-2 gap-7 p-2'>
                {pizza.slice(0, 6).map(p => <Menu key={p._id} d={p}></Menu>)}
            </div>
            <CommonButton></CommonButton>


            <Cover img={soupImg} title={'soup'} body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <div className='grid grid-cols-1 mt-28 md:grid-cols-2 gap-7 p-2'>
                {soup.slice(0, 6).map(p => <Menu key={p._id} d={p}></Menu>)}
            </div>
            <CommonButton></CommonButton>


            <Cover img={saladImg} title={'soup'} body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <div className='grid grid-cols-1 mt-28 md:grid-cols-2 gap-7 p-2'>
                {salad.slice(0, 6).map(p => <Menu key={p._id} d={p}></Menu>)}
            </div>
            <CommonButton></CommonButton>


        </div>
    );
};

export default MenuPage;