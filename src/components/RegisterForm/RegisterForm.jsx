import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onRegisterSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onRegisterSubmit}>
      <label >
        <p>Name</p>
        <input
          type="text"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label >
        <p>Email</p>
        <input type="email" name="userEmail" required />
      </label>

      <label>
        <p>Password</p>
        <input
          type="password"
          name="userPassword"
          required
        />
      </label>

      <button type="submit">
        Sign up
      </button>
      <Link to="/login">
        Already have an acount? Log in
      </Link>
    </form>
  );
};

export default RegisterForm;