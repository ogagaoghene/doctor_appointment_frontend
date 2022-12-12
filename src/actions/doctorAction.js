const GET_DOCTORS = 'GET_DOCTORS';
const FILTER_DOCTORS = 'FILTER_DOCTORS';
const SELECT_DOCTORS = 'SELECT_DOCTORS';

const displayDoctors = (doctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
});

const selectDoctors = (doctor) => ({
  type: SELECT_DOCTORS,
  payload: doctor,
});

const filterDoctors = (specialty) => ({
  type: FILTER_DOCTORS,
  payload: specialty,
});

export {
  GET_DOCTORS, FILTER_DOCTORS, SELECT_DOCTORS, displayDoctors, filterDoctors, selectDoctors,
};
