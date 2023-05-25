import React from 'react';
import { Link } from 'react-router-dom';

const CommonButton = ({ url }) => {
    return (
        <div className='text-center my-4'>
            <Link to={url}><button className=' font-semibold border-b-2 p-2 rounded-md hover:bg-black hover:text-white duration-300 border-black'>ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default CommonButton;