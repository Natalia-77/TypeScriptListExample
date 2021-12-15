import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home';
import Login from './components/authorize/Login/index';
import Register from './components/authorize/Register';
import './App.css';
import DefaultLayout from './components/containers/DefaultLayout';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={< HomePage />} />
          <Route path="login" element={< Login/>} />   
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
