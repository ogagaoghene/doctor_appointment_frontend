import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import axios from 'axios';
import url from '../apiUrl/apiLink';
import { userAccSuccess, userAccError } from '../actions/userAction';
import Style from '../styles/Signup.module.css';

const Signup = (props) => {
  /* eslint-disable camelcase */
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPConfirmation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
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
    const { history } = props;
    history.push('/login');
    setLoading(false);
  };

  const userData = {
     username, email, password, password_confirmation,
  };

  const signupProcess = () => {
    axios.post(`${url}/registrations`, userData, { withCredentials: true })
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
    setLoading(true);
    signupProcess();
    if (email || password !== '') {
      setErrorMsg('');
    } else {
      setErrorMsg('Please, enter valid credentials!');
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.setMessage}>
        {loading ? (
          <div>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={40}
              width={40}
            />
            <h3>Processing...</h3>
          </div>
        ) : <div />}
      </div>
      <form className={Style.signupForm}>
       
        <input type="text" name="username" id="uname" value={username} onChange={handleChange} placeholder="Enter username" required />
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

Signup.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Signup;
