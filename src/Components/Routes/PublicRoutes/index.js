import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoutes() {
    const auth = localStorage.getItem('auth');
    if(!auth){
        return <Outlet />
    } else {
       return <Navigate to="/" />
    }
}
