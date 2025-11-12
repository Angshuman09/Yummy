import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const {isAuthenticated} = useAuth0();
  
  if(isAuthenticated){
    return <Outlet/>
  }

   return <Navigate to='/'/>
}

export default ProtectedRoute