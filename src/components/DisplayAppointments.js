import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loadAppointments, selectedAppointment } from '../actions/appointmentAction';
import BookNav from './BookNav';
import Style from '../styles/DisplayAppoint.module.css';

const DisplayAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const appointments = useSelector((state) => state.appointments.appointments);
  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAppointments = () => {
    axios.get(`http://localhost:3001/api/v1/appointments/${user.id}`)
      .then((response) => {
        const appointList = response.data.data;
        dispatch(loadAppointments(appointList));
      })
      .catch(() => {
      });
  };

  const deleteAppoint = (e) => {
    const { id } = e.target;
    axios.delete(`http://localhost:3001/api/v1/appointments/${id}`)
      .then((response) => {
        if (response.data.status === 'SUCCESS') {
          navigate('/doctor');
        }
      })
      .catch(() => {
      });
  };

  const handleEdit = (e) => {
    const { id } = e.target;
    appointments.forEach((x) => {
      const xValue = (x.id).toString();
      if (xValue === id) {
        dispatch(selectedAppointment(x));
      }
    });
    navigate('/edit');
  };

  const checkStatus = () => {
    if (appointments.length === 0) {
      setData(true);
    } else {
      setData(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  return (
    /* eslint-disable camelcase */
    <section className={Style.setPage}>
      <BookNav />
      <div className={Style.listBox}>
        <div className={Style.setInfo}>
          {data ? (
            <div>
              <h3>No Appointment Booked</h3>
            </div>
          ) : <div />}
        </div>
        <div>
          <h2 className={`${Style.font} ${Style.smallFont}`}>My Booked Appointment</h2>
          <div className={`${Style.rowHead} ${Style.font}`}>
            <div>Doctor Name</div>
            <div>Appointment Date</div>
            <div className={Style.city}>City</div>
            <div>Action</div>
          </div>
          { appointments.map((data) => (
            <div key={data.id} className={Style.itemBox}>
              <div className={`${Style.data} ${Style.docName}`}>{data.doctor_name}</div>
              <div className={`${Style.data} ${Style.dataDate}`}>
                {new Date(data.appointment_time)
                  .toLocaleDateString()}
              </div>
              <div className={`${Style.data} ${Style.alignRight} ${Style.alignCol}`}>{data.location}</div>
              <div className={Style.setActionBtn}>
                <button type="button" id={data.id} onClick={deleteAppoint}>Delete</button>
                <button type="button" id={data.id} onClick={handleEdit}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayAppointments;
