import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user, isLoading } = useAuth()
    if (isLoading) { return <CircularProgress /> }

    if( user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    
};

export default PrivateRoute;