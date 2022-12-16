import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpAction } from '../../redux/signup';
import { useDispatch } from 'react-redux';

function SignUpForm() {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = {name, email, password};
  //   dispatch(SignUpAction(user));
  //   navigate('/signin')
  // }

  return (
    <div className="form">
      <div className="form-body">
        <div className="form-title">
          <p className="h3">Create an account</p>
        </div>
        <div className="username">
          <label className="form__label" for="firstName">First Name </label>
          <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
        </div>

        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>

        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password"  id="password" placeholder="Password"/>
        </div>

        <div className="signup-buttons mt-4 text-center">
          <button type="submit" className=" btn btn-secondary m-3" to="/signin">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;