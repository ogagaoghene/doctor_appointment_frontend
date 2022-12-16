import { configureStore } from '@reduxjs/toolkit';
import { SignUpReducer } from './signup';
import { LoginReducer } from './login';

const store = configureStore({
  reducer: {
    user: SignUpReducer,
    login: LoginReducer,
  },
});

export default store;



