import React from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const RequiredAuth = ({ children }) => {
    const cookies = new Cookies();
    
    const auth = cookies.get('user');

    if(auth) {
        return children;
    } else {
        return <Navigate to='/login' replace />
    }
}

export default RequiredAuth