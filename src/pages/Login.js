import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { userAccSuccess, userLoginError, userError } from '../actions/userAction';
import Style from '../styles/Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  /* eslint-disable camelcase */
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const { history } = props;
  const userData = { name, password };

  const loginProcess = () => {
    axios.post('http://localhost:3001/api/v1/sessions', userData)
      .then((response) => {
        if (response.data.logged_in) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          navigate('/doctor');
          setLoading(false);
          dispatch(userAccSuccess(response.data.data));
        } else {
          dispatch(userLoginError());
        }
      })
      .catch((error) => {
        dispatch(userError(error));
        history.push('/login');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    loginProcess();
  };

  return (
    <div className={Style.container}>
      <form className={Style.signupForm}>
        <input type="text" name="name" id="uname" value={name} onChange={handleChange} placeholder="Enter username" required />
        <input type="password" name="password" id="pword" value={password} onChange={handleChange} placeholder="Enter password" required />
        <button type="submit" onClick={handleSubmit}>Login</button>
        <div>
          <span>Have not registered? </span>
          <Link to="/" className={Style.submitBtn}>Home</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
