import React from 'react';
import './Cover.css'

const Cover = ({ img, title, body }) => {
    return (
        <div style={{ backgroundImage: `url('${img}')` }} className='bg-center md:px-28 bg-cover bg-no-repeat text-center  md:py-44 py-24'>
            <div className='bg-black text-white py-24 bg-opacity-40 px-3 '>
                <h3 className='text-3xl font-semibold uppercase mb-2'>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Cover;