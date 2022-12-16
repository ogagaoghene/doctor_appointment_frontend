import axios from 'axios';

const LOG_IN = 'APPOINTMENT_LOG_IN';
const LOG_IN_SUCCESS = 'APPOINTMENT_LOG_IN_SUCCESS';
const LOG_OUT = 'LOGOUT';
const api = 'http://localhost:3000/api/v1/login';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const initialState = { user: initialUser};

const login = (payload) => ({
  type: LOG_IN,
  payload,
});

const logout = () => {
  localStorage.removeItem('user');
};

const loginSuccess = (payload) => ({
  type: LOG_IN_SUCCESS,
  payload,
});

export const loginAction = (payload) => async (dispatch) => {
  dispatch(login());
  axios.post(api, payload).then((res) => {
    dispatch(loginSuccess(res.data));
  });
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state }
    case LOG_IN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, data: action.payload };
    case LOG_OUT:
      logout();
      return { ...state, user: null };
    default:
      return state;
  }
};

export { login, loginSuccess, logout, LoginReducer };