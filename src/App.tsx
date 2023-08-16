import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='login' />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
