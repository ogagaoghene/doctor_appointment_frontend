import React from 'react';
import { Link } from 'react-router-dom';

class SplashScreen extends React.Component {
  render() {
    return(
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center py-5'>
        <div>
          <h1 className=''>Doctor Apppointment App</h1>
        </div>
        <div className='btn-container'>
          <Link className="h4 btn btn-primary m-3" to="/sign_up_form">Sign up</Link>
          <Link className="h4 btn btn-secondary m-3" to="/sign_in_form">Sign in</Link>
        </div>
      </div>
    );
  }
}

export default SplashScreen;