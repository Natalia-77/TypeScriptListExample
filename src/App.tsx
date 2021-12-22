import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home';
import Login from './components/authorize/Login/index';
import Register from './components/authorize/Register';
import ListProductPage from './components/products/ListProducts';
import './App.css';
import DefaultLayout from './components/containers/DefaultLayout';
import { useActions } from './hooks/useActions'
import { Dispatch } from 'react';

const App: React.FC = () => {

  // const { UserLoginReset } = useActions();
  // var token = localStorage.getItem('Token');
  // if (token) {
  //   UserLoginReset(token);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={< HomePage />} />
          <Route path="login" element={< Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<ListProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
