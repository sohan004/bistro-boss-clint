import React from 'react';

const FoodCart = ({ d }) => {
    const { image, name, _id, price, recipe } = d
    return (
        <div className="card relative w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full' /></figure>
            <h3 className='bg-slate-900 absolute right-5 top-5 text-white px-3 py-1'>${price}</h3>
            <div className="card-body text-center">
                <div className='text-center'>
                    <h2 className=" text-lg font-bold">{name}</h2>
                    <p className='my-4'>{recipe}</p>
                    <button className="btn  sticky bg-slate-300 text-black border-0 border-b-2 top-full w-6/12">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;