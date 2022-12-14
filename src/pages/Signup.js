import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { userAccSuccess, userAccError } from '../actions/userAction';
import Style from '../styles/Signup.module.css';

const Signup = () => {
  /* eslint-disable camelcase */
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPConfirmation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.name === 'password_confirmation') {
      setPConfirmation(e.target.value);
    }
  };

  const handleRegister = () => {
    navigate('/login');
  };

  const userData = {
    name, email, password, password_confirmation,
  };

  const signupProcess = () => {
    axios.post('http://localhost:3001/api/v1/registrations', userData, { withCredentials: false })
      .then((response) => {
        if (response.data.status === 'created') {
          handleRegister();
          dispatch(userAccSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(userAccError(error));
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signupProcess();
    if (email || password !== '') {
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid credentials!');
    }
  };

  return (
    <div className={Style.container}>

      <form className={Style.signupForm}>

        <input type="text" name="name" id="name" value={name} onChange={handleChange} placeholder="Enter username" required />
        <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter email" required />
        <input type="password" name="password" id="pword" value={password} onChange={handleChange} placeholder="Enter password" required />
        <input type="password" name="password_confirmation" id="cpword" value={password_confirmation} onChange={handleChange} placeholder="Confirm password" required />
        <button type="submit" onClick={handleSubmit}>Register</button>
        <div>
          <span>Do you already have an account? </span>
          <Link to="/login" className={Style.submitBtn}>Login</Link>
        </div>
        {errorMsg === '' ? '' : <h3>{errorMsg}</h3>}

      </form>
    </div>
  );
};

export default Signup;
