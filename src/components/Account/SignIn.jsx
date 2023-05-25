import React, { useState } from 'react';
import img from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
// import { FaEye, FaEyeSlash, IconName } from "react-icons/fa";
import { FaBeer, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTitle } from '../useCustom/useCustom';

const SignIn = () => {
    useTitle('Sign In')
    const [tf, setTf] = useState(true)
    return (
        <div className='max-w-screen-xl mx-auto shadow-lg'>
            <div className='flex flex-col-reverse gap-4 md:flex-row items-center py-11 md:mt-24 bg-slate-100  px-6'>
                <div className='w-full md:w-6/12'>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='w-full md:w-6/12'>
                    <h3 className='text-center font-semibold text-2xl my-3'>Log In</h3>
                    <form >
                        <p className='font-medium mb-2'>Email</p>
                        <input placeholder='type email' type="email" name="email" className='border w-full p-3 rounded-md' />
                        <p className='font-medium  mt-5 mb-2'>password</p>
                        <div className='relative'>
                            <input placeholder='type password' type={tf? 'password' : 'text'} name="pass" className='border w-full p-3 rounded-md' />
                            {tf ? <FaEyeSlash onClick={()=>setTf(!tf)} className='absolute right-4 top-4 text-xl cursor-pointer' /> :<FaEye onClick={()=>setTf(!tf)} className='absolute right-4 top-4 text-xl cursor-pointer' />}
                        </div>
                        <input type="submit" className='w-full bg-yellow-800 p-3 rounded-lg mt-6 bg-opacity-50 text-white' value="sign in" />
                    </form>
                    <Link to="/sign_up"><p className='text-center my-6 text-slate-950'>New here? Create a New Account</p></Link>
                    <p className='text-center'>or sign with</p>
                    <div className='text-center mt-3'>
                        <button className="btn">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;