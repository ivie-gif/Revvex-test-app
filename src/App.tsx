import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthLayout from './authLayout'
import { Box, Divider, Typography } from '@mui/material';
import Button from './component/Button'
import Register from './component/Forms/Register';
import {Route, Routes} from 'react-router-dom'
import Login from './component/Forms/Login';
import ConfirmEmail from './component/Forms/ConfirmEmail'
import EmailVerified from './component/Forms/EmailVerified'
import VerifyEmailOtp from './component/Forms/VerifyEmailOtp'
import Portfolio from './pages/Portfolio'
import Messages from './pages/Messages'

function App() {
  return (
<Routes>
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/confirmEmail' element={<ConfirmEmail />} />
  <Route path='/emailverified' element={<EmailVerified />} />
  <Route path='/verifyEmail' element={<VerifyEmailOtp />} />
  <Route path='/portfolio' element={<Portfolio />} />
  <Route path='/messages' element={<Messages />} />
</Routes>
  );
}

export default App;
