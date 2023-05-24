import React from 'react';

const Menu = ({d}) => {
    const {image, name, recipe, price} = d
    return (
        <div  className='flex gap-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" className="h-24 w-28" />
            <div>
                <h3 className='text-xl uppercase'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
                <h3 className='text-xl  text-orange-500'>${price}</h3>
            
        </div>
    );
};

export default Menu;