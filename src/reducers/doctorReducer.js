import { GET_DOCTORS, SELECT_DOCTORS } from '../actions/doctorAction';

const initialState = {
  doctors: [],
};

export const doctorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCTORS:
      return { ...state, doctors: payload };
    default:
      return state;
  }
};

export const selectedDoctorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECT_DOCTORS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
