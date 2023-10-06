import React from 'react';
import './App.css';
import { Login, Register } from '../component';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
