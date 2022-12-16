import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDetails from '../pages/DoctorDetails';
import DoctorListing from '../pages/DoctorListing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cover from './Cover';
import CreateAppointment from '../pages/CreateAppointment';
import DisplayAppointments from './DisplayAppointments';
import EditAppointment from './EditAppointment';

const Paths = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Cover />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<CreateAppointment />} />
      <Route path="/appointmentDisplay" element={<DisplayAppointments />} />
      <Route path="/doctor/:doctorId" element={<DoctorDetails />} />
      <Route path="/doctor" element={<DoctorListing />} />
      <Route path="/edit" element={<EditAppointment />} />
    </Routes>
  </Router>
);

export default Paths;
