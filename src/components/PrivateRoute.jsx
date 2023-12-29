import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../src/redux/auth/authSelectors';

const PrivateRoute = ({ children, navigateTo = '/login' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;