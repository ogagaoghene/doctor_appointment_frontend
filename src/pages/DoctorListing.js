import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { displayDoctors, filterDoctors } from '../actions/doctorAction';
import { resetAppointments } from '../actions/appointmentAction';
import { userLogout, userError } from '../actions/userAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import url from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';
import SliderShow from '../components/SliderShow';
import { useNavigate } from 'react-router-dom';

const DoctorListing = (props) => {
  const doctors = useSelector((state) => state.allDoctors.doctors);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchList = () => {
    axios.get('http://localhost:3001/api/v1/doctors')
      .then((response) => {
        const docList = response.data.data;
        dispatch(displayDoctors(docList));
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleFilter = (filter) => {
    dispatch(filterDoctors(filter));
  };

  const { history } = props;
  const handleLogout = () => {
    axios.delete('http://localhost:3001/api/v1/logout')
      .then((response) => {
        if (response.data.logged_out) {
          dispatch(userLogout(response));
          dispatch(resetAppointments());
          localStorage.setItem('user', JSON.stringify({ username: 'Guest' }));
          navigate('/')
        }
      })
      .catch((error) => {
        dispatch(userError(error));
      });
  };

  const handleAppoint = () => {
    navigate('/appointmentDisplay')
  };

  const filteredDoctors = () => {
    if (filter === 'All') return doctors;
    return doctors.filter((doctor) => doctor.specialty === filter);
  };

  return (
    <>
      <div className={Style.container}>
        <DoctorFilter
          handleFilter={handleFilter}
          handleLogout={handleLogout}
          handleAppoint={handleAppoint}
        />
        <div className={Style.doctorDisplay}>
          <div className={Style.setname}>
            <h3>
              {`${user.name}`}
            </h3>
          </div>
          <div className={Style.textCenter}>
            <h1 className={Style.noMargin}>Choose Experienced Doctor</h1>
            <p className={Style.greyText}>Consultants with many years of experience</p>
          </div>
          <div className={Style.displayDoctors}>
            {filteredDoctors().map((doctor) => (
              <DoctorComponent key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

DoctorListing.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorListing;
