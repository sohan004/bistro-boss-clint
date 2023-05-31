import React, { useContext, useState } from 'react';
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash, IconName } from "react-icons/fa";
import { FaBeer, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTitle } from '../useCustom/useCustom';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { GridLoader } from 'react-spinners';

const SignUp = () => {
    const navigate = useNavigate()
    const [eror, setEror] = useState('')
    const { signUp, updt, varify, out } = useContext(AuthContex)
    useTitle('Sign Up')
    const [tf, setTf] = useState(true)
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        setLoading(false)
        const img = data.file[0]
        const formdata = new FormData()
        formdata.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json()).then(image => {
                // console.log(image.data.display_url)
                signUp(data.email, data.pass)
                    .then(result => {
                        setEror('')
                        updt(result.user, data.name, image.data.display_url)
                            .then(updpUser => {
                                const userInfo = { name: result.user.displayName, email: result.user.email, role: 'user' }
                                fetch('http://localhost:5000/users', {
                                    method: 'POST',
                                    headers: { 'content-type': 'application/json' },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(u => {
                                        if (u.insertedId) {
                                            varify(result.user)
                                                .then(() => {
                                                    out().then(() => {
                                                        setLoading(true)
                                                        Swal.fire(
                                                            'Register Successfully',
                                                            'go to your email box and verify your account',
                                                            'success'
                                                        )
                                                        navigate('/sign_in')
                                                    })
                                                })
                                        }
                                    })
                            }).catch(err => {
                                setEror(err.message)
                                setLoading(true)
                            })

                    })
                    .catch(err => {
                        setEror(err.message)
                        setLoading(true)
                    })
            })
    };
    return (
        <div className='max-w-screen-xl mx-auto shadow-lg'>
            <div className='flex flex-col gap-4 md:flex-row items-center py-11 md:mt-24 bg-slate-100  px-6'>
                <div className='w-full md:w-6/12'>
                    {loading ? <div>
                        <h3 className='text-center font-semibold text-2xl my-3'>Register</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className='font-medium mb-2'>Name</p>
                            <input {...register("name", { required: true })} placeholder='type name' type="text" name="name" className='border w-full p-3 rounded-md' />
                            {errors.name?.type === 'required' && <p className='text-red-600'> name is required</p>}
                            <p className='font-medium mb-2 mt-5'>Email</p>
                            <input {...register("email", { required: true })} placeholder='type email' type="email" name="email" className='border w-full p-3 rounded-md' />
                            {errors.email?.type === 'required' && <p className='text-red-600'> email is required</p>}
                            <p className='font-medium  mt-5 mb-2'>Your Image</p>
                            <input {...register("file", { required: true })} type="file" name="file" className='p-2  ' />
                            {errors.file?.type === 'required' && <p className='text-red-600'> img is required</p>}
                            <p className='font-medium  mt-5 mb-2'>password</p>
                            <div className='relative'>
                                <input {...register("pass", { required: true, pattern: /(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])/ })} placeholder='type password' type={tf ? 'password' : 'text'} name="pass" className='border w-full p-3 rounded-md' />
                                {tf ? <FaEyeSlash onClick={() => setTf(!tf)} className='absolute right-4 top-4 text-xl cursor-pointer' /> : <FaEye onClick={() => setTf(!tf)} className='absolute right-4 top-4 text-xl cursor-pointer' />}
                                {errors.pass?.type === 'required' && <p className='text-red-600'> password is required</p>}
                                {errors.pass?.type === 'pattern' && <p className='text-red-600'> 2 lowercase 2 upercase and 2 number must be add your password</p>}
                            </div>
                            <p className='text-red-600 my-3'>{eror}</p>
                            <input type="submit" className='w-full bg-yellow-800 p-3 rounded-lg mt-6 bg-opacity-50 text-white' value="sign in" />
                        </form>
                        <Link to="/sign_in"><p className='text-center my-6 text-slate-950'>Already registered? Go to log in</p></Link>
                    </div> : <div className='flex justify-center my-5'>
                        <GridLoader color="#36d7b7" />
                    </div>}
                </div>
                <div className='w-full md:w-6/12 '>
                    <img src={img} alt="" className='w-full ' />
                </div>
            </div>
        </div>
    );
};

export default SignUp;