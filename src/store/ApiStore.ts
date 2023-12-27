// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import {registrationApi} from '../services/registrationSlice';
import {loginApi} from '../services/loginSlice'

const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat([
    registrationApi.middleware,
    loginApi.middleware, // Include loginApi middleware
  ]),
});

export default store;
