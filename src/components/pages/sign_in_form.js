import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/login';



const SigninForm = () => {

  // const [name] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  

  // const handleSubmit = (e) => {
  //   const user = {name};
  //   e.preventDefault();
  //   dispatch(loginAction(user));
  //   window.location.reload();
  //   user.login = true;
  //   navigate('/');
  // };

  return (
    <form className='p-5 d-flex flex-coloumn align-items-center justify-content-center'  method="POST">
      <div className="form-body p-5">
        <div className="logo-title mt-5 mt-md-5 pt-md-5">
          <h3>Account Login</h3>
        </div>
        {/* User Name input*/}
        <div className="form-outline mb-4">
          <input type="text" id="form2Example1" class="form-control" />
          <label className="form-label" for="form2Example1">User Name</label>
        </div>
        <div className="signup-buttons mt-5 text-center">
          <button type="submit" className="style-btn rounded-pill">LOGIN</button>
        </div>
      </div>
    </form>
  )
};


export default SigninForm;