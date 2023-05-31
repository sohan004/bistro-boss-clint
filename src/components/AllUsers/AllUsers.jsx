import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../useCustom/useAxios';
import useAdmin from '../useCustom/useAdmin';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const { out } = useContext(AuthContex)
    const axios = useAxiosSecure()
    useEffect(() => {
        const users = async () => {
            const res = await axios.get('/users')
            await setUsers(res.data)
        }
        users()
    }, [])
    
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((d, i) =>
                                <tr key={d._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        {d.name}
                                    </td>
                                    <td>
                                        {d.email}
                                    </td>
                                    <td>
                                        {d.role}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">delete</button>
                                    </td>
                                </tr>)}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;