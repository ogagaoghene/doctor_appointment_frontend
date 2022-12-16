
import axios from "axios";


const api = 'http://localhost:3000/api/v1/users';
const initialState = [];
const SIGN_UP = 'APPOINTMENT_SIGN_UP';
const SIGN_UP_SUCCESS = 'APPOINTMENT_SIGN_UP_SUCCESS';

const Signup = (payload) => ({
  type: SIGN_UP,
  payload,
});

const SignUpSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
})

export const SignUpAction = (payload) => async(dispatch) => {
  dispatch(Signup());
  axios.post(api, payload)
  .then((res) => {
    dispatch(SignUpSuccess(res.data));
  })
};

const SignUpReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP:
      return { ...state};
    case SIGN_UP_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}


export { Signup, SignUpSuccess, SignUpReducer };