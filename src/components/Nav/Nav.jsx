import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const ulItem = <>
        <li><Link to="/" className='font-medium'>Home</Link></li>
        <li><Link to="/menu" className='font-medium'>Menu</Link></li>
        <li><Link to={`/shop/salad`} className='font-medium'>Shop</Link></li>
    </>
    return (
        <div className=''>
            <div className="navbar bg-black max-w-screen-xl mx-auto bg-opacity-25 text-white fixed top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-opacity-70 bg-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {ulItem}
                        </ul>
                    </div>
                    <h3 className='text-2xl font-medium'>BISTRO BOSS</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {ulItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;