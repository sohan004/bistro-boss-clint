import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const loc = useLocation()
    const { user, load } = useContext(AuthContex)
    if (load) {
        return
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/sign_in" state={loc.pathname}></Navigate>
    }
};

export default Private;