import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      </>
    
  );
}

export default App;