import React from 'react';
import { ActivePage } from './authNav.styled';

const AuthNav = () => {
  return (
    <div>
      <ActivePage to="/login">Log in</ActivePage>
      <ActivePage to="/register">Sign up</ActivePage>
    </div>
  );
};

export default AuthNav;