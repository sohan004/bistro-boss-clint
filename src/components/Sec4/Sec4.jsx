import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import CommonButton from '../shared/CommonButton/CommonButton';

const Sec4 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json()).then(dat => setData(dat))
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-2'>
                {data.slice(0, 6).map(d => <Menu key={d._id} d={d}></Menu>)}
            </div>
            <CommonButton></CommonButton>
        </>
    );
};

export default Sec4;