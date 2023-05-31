import React from 'react';
import { useCarts } from '../useCustom/useCarts';

const Carts = () => {
    const { data } = useCarts()
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {data.map((d, i) =>
                            <tr key={d._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <img className='w-9' src={d.image} alt="" />
                                </td>
                                <td>
                                    {d.name}
                                </td>
                                <td>
                                    {d.price}
                                </td>
                                <td>
                                    <button className="btn btn-danger">deleter</button>
                                </td>
                            </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Carts;