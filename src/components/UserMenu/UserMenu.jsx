import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { logoutThunk } from '../../redux/auth/authOperations';
const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return (
    <div>
      <div >
        <h3>Welcome, {user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={() => dispatch(logoutThunk())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;