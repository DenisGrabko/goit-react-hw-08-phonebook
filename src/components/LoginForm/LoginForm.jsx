import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onLoginSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <label>
        <p>Email</p>
        <input type="email" name="userEmail" required />
      </label>

      <label>
        <p>Password</p>
        <input
          type="password"
          name="userPassword"
          minLength={7}
          required
        />
      </label>

      <button type="submit">
        SignIn
      </button>
      <Link to="/register">
        New user? Sign in
      </Link>
    </form>
  );
};

export default LoginForm;