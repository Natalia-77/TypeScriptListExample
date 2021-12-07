import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home';
import ProductList from './components/ProductList';
import './App.css';
import DefaultLayout from './components/containers/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={< HomePage />} />
          <Route path="/list" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
