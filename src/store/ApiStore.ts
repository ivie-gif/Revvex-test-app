// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import {registrationApi} from '../services/registrationSlice';
import {loginApi} from '../services/loginSlice'
import {otpVerifyApi} from '../services/otpSlice'

const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [otpVerifyApi.reducerPath]: otpVerifyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat([
    registrationApi.middleware,
    loginApi.middleware,
    otpVerifyApi.middleware,
  ]),
});

export default store;
