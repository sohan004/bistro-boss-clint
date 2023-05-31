import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import useAxiosSecure from '../useCustom/useAxios';
import useAdmin from '../useCustom/useAdmin';

const PrivateAdmin = ({ children }) => {
    const { user } = useContext(AuthContex)

    const { adminData, isLoading } = useAdmin()
    if (isLoading) {
        return
    }
    if (user && adminData?.admin) {
        return children
    }
    else {
        return <Navigate to='/'></Navigate>
    }
};

export default PrivateAdmin;