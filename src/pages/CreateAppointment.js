import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DatePicker from 'react-datetime';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import 'react-datetime/css/react-datetime.css';
import { bookAppointment } from '../actions/appointmentAction';
import Style from '../styles/CreateAppointment.module.css';

const CreateAppointment = () => {
  const LOCATIONS = [
    'Select location',
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Aba',
    'Onitsha',
    'Owerrri',
  ];
  /* eslint-disable camelcase */
  const user = useSelector((state) => state.user.user);
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const user_id = user.id;
  const doctor_id = doctor.id;
  const [dt, setDt] = useState(moment());
  const [location, setLocation] = useState('');
  const appointment_time = dt;
  const doctor_name = doctor.name;
  const navigate = useNavigate();

  const handleClick = (event) => {
    const { value } = event.target;
    setLocation(value);
  };

  const handleCreation = () => {
    navigate('/appointmentDisplay');
  };

  const appointmentData = {
    user_id, doctor_id, appointment_time, location, doctor_name,
  };
  const createAppointment = () => {
    axios.post('http://localhost:3001/api/v1/appointments', appointmentData, { withCredentials: false })
      .then((response) => {
        dispatch(bookAppointment(response));
        handleCreation();
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAppointment();
  };

  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = (current) => current.isAfter(yesterday);

  return (
    <section className={Style.setPage}>
      <SideNav />
      <div className={Style.formContainer}>
        <form className={Style.formBox}>
          <input type="text" name="doctor_name" value={doctor_name} required />
          <DatePicker data-testid="date" id="data-testid" value={dt} timeFormat="hh:mm A" showTimeSelect isValidDate={disablePastDt} dateFormat="DD-MM-YYYY" onChange={(val) => setDt(val)} />
          <select
            name="location"
            id="select"
            data-testid="areas"
            onChange={handleClick}
          >
            {LOCATIONS.map((location) => (
              <option
                value={location}
                key={location}
              >
                {location}
              </option>
            ))}
          </select>
          <button type="submit" className={Style.createBtn} onClick={handleSubmit}>Create Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default CreateAppointment;
