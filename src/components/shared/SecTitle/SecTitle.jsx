import React from 'react';

const SecTitle = ({one, two}) => {
    return (
        <div className='mt-20 mb-12 text-center'>
            <p className='mb-4 text-orange-400'>---{one}---</p>
            <div className='flex justify-center'>
                <h3 className='uppercase text-3xl px-5 border-y-4 py-2'>{two}</h3>
            </div>
        </div>
    );
};

export default SecTitle;