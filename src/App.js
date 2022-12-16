import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SplashScreen from './components/authorization/splash_screen';
import Signin from './components/authorization/sign_in';
import Signup from './components/authorization/sign_up';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path="/sign_up" element={<Signup />} />
            <Route path="/sign_in" element={<Signin />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
