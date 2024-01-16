import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
    const auth = localStorage.getItem('auth');
    if(auth) {
        return <Outlet/>
    }else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoutes