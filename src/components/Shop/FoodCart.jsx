import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCarts } from '../useCustom/useCarts';

const FoodCart = ({ d }) => {
    const navigate = useNavigate()
    const loc = useLocation()
    const { user } = useContext(AuthContex)
    const { image, name, _id, price, recipe } = d
    const { refetch } = useCarts()

    const addCart = () => {

        const email = user?.email
        const item = { image, name, itemId: _id, price, recipe, email }
        if (email) {

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(sendData => {
                    if (sendData.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'food add to cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        } else {
            Swal.fire({
                title: 'log in first',
                text: "please log in first then add to cart food",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign_in', { state: loc.pathname })
                }
            })
        }
    }
    return (
        <div className="card relative w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full' /></figure>
            <h3 className='bg-slate-900 absolute right-5 top-5 text-white px-3 py-1'>${price}</h3>
            <div className="card-body text-center">
                <div className='text-center'>
                    <h2 className=" text-lg font-bold">{name}</h2>
                    <p className='my-4'>{recipe}</p>
                    <button onClick={addCart} className="btn  sticky bg-slate-300 hover:text-white  text-black border-0 border-b-2 top-full w-6/12">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;