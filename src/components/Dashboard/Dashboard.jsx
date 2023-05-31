import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useCarts } from '../useCustom/useCarts';
import { AuthContex } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../useCustom/useAxios';
import useAdmin from '../useCustom/useAdmin';

const Dashboard = () => {
    const { user, out } = useContext(AuthContex)
    const { adminData, isLoading } = useAdmin()
    const admin = adminData?.admin
    const barHeader =
        <div className='mb-12'>
            <h1 className='text-3xl font-bold' >Bristo Boss</h1>
            <p className='text-xl font-medium'>Resturent</p>
        </div>
    const barItems =
        <div className='flex flex-col gap-5 '>
            <NavLink to='/dashboard/user_home' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>Payment History</NavLink>
            <NavLink to='/dashboard/carts' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>My Cart</NavLink>
            <NavLink to='/dashboard/all_users' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>Add Review</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>My Booking</NavLink>
            <hr className='text-white' />
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>

        </div>
    const adminItems =
        <div className='flex flex-col gap-5 '>
            <NavLink to='/dashboard/user_home' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>admin home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>add items</NavLink>
            <NavLink to='/dashboard/carts' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>manage items</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>manage booking</NavLink>
            <NavLink to='/dashboard/all_users' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>all user</NavLink>
            <hr className='text-white' />
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>
            <NavLink to='/..' className={({ isActive }) => `font-semibold ${isActive ? 'text-white' : 'text-black'}`}>User Home</NavLink>

        </div>
    return (
        isLoading ? <div></div> : <div className='max-w-screen-xl mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-yellow-600 p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {barHeader}
                        {admin ? adminItems : barItems}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;