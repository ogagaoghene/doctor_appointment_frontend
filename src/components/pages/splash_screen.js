import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center py-5'>
      <div>
        <h1 className=''>Book an Appointment now</h1>
      </div>
      <div className='btn-container'>
        <Link className="h4 btn btn-primary m-3" to="/sign_up_form">Sign up</Link>
        <Link className="h4 btn btn-secondary m-3" to="/sign_in">Sign in</Link>
      </div>
    </div>
  )
}

export default SplashScreen;