import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datetime';
import { useNavigate } from 'react-router-dom';
import SideNav from './SideNav';
import 'react-datetime/css/react-datetime.css';
import Style from '../styles/CreateAppointment.module.css';

const EditAppointment = () => {
  /* eslint-disable camelcase */
  const appointment = useSelector((state) => state.appointments.appointment);
  const {
    id,
    doctor_id,
    user_id,
    doctor_name,
  } = appointment;
  const [dt, setDt] = useState(moment());
  const [location, setLocation] = useState('');
  const appointment_time = dt;
  const navigate = useNavigate();

  const LOCATIONS = [
    'Select location',
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Aba',
    'Onitsha',
    'Owerrri',
  ];

  const handleClick = (event) => {
    const { value } = event.target;
    setLocation(value);
  };

  const handleEdit = () => {
    navigate('/appointmentDisplay');
  };

  const appointmentData = {
    doctor_id, user_id, appointment_time, location, doctor_name,
  };
  const editAppointment = (id) => {
    axios.patch(`http://localhost:3001/api/v1/appointments/${id}`, appointmentData, { withCredentials: false })
      .then((response) => {
        if (response.data.status === 'SUCCESS') {
          handleEdit();
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editAppointment(id);
  };

  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = (current) => current.isAfter(yesterday);

  return (
    <section className={Style.setPage}>
      <SideNav />
      <div className={Style.formContainer}>
        <form className={Style.formBox}>
          <input type="text" name="doctor_name" value={doctor_name} required />
          <DatePicker
            data-testid="date"
            value={dt}
            timeFormat="hh:mm A"
            showTimeSelect
            isValidDate={disablePastDt}
            dateFormat="DD-MM-YYYY"
            onChange={(val) => setDt(val)}
          />
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
                {
              location
}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={Style.createBtn}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditAppointment;
