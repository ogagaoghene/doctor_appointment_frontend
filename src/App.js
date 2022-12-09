import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SplashScreen from './components/pages/splash_screen';
import Signin from './components/auth/sign_in';
import SignUpForm from './components/pages/sign_up_form';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path="/sign_up_form" element={<SignUpForm />} />
            <Route path="/sign_in" element={<Signin />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
