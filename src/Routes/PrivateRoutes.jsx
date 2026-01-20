import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = () => {
    const {user,loading} = UseAuth();
     const location = useLocation();
     
  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
}

};

export default PrivateRoutes;