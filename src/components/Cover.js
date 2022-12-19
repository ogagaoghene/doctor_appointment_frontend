import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/Signup.module.css';

const Cover = () => (
  <div className={`${Style.container} ${Style.coverBg}`}>
    <h1 className={Style.setTitle}>BOOK APPOINTMENT WITH A DOCTOR</h1>
    <div className={Style.homeForm}>
      <Link to="/login" className={Style.setLinkBtn}>
        Login
      </Link>
      <Link to="/signup" className={Style.setLinkBtn}>
        Register
      </Link>
    </div>
  </div>
);

export default Cover;
