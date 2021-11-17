import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user, isLoading, isAdmin } = useAuth()
    if (isLoading) { return <CircularProgress /> }
    
    if( user.email && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;