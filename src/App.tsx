import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='home' />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  );
}

export default App;
