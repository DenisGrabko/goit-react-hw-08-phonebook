import React from 'react';
import { ActivePage } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav>
      <ActivePage to="/">
        PhoneBook
      </ActivePage>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;