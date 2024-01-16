import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Views/Dashboard';
import Users from '../../Views/Users';
import Login from '../../Views/Login';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Patientslist from '../../Views/Patientslist';

const ApplicationRoutes =()=>{
  return (
    <Routes>
        <Route exact path='/' element={<PrivateRoutes/>} >
        <Route path='/' element={<Dashboard />}/>
        <Route path='/users' element={<Users />} />
        <Route path='/patients' element={<Patientslist />} />
        </Route>
        <Route element={<PublicRoutes/>}>
        <Route path='/login' element={<Login />} />
        </Route>
    </Routes>
  )
}

export default ApplicationRoutes;

