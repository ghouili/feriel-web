import React from 'react'
import { Routes,  Route, } from 'react-router-dom';
import Cookies from 'universal-cookie';

import RequiredAuth from '../Pages/Authentication/RequiredAuth';
import Login from '../Pages/Authentication/Login';
import Dashboard from '../Pages/Dashboard';

const MainRoutes = () => {
  return (
    <Routes>

        <Route 
            path='/' 
            element={
                <RequiredAuth>
                    <Dashboard />
                </RequiredAuth>
            } 
        />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default MainRoutes