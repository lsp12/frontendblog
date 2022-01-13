import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Module/Home/view/Home';
import Login from '../Module/Login/view/Login';
import Layout from '../shared/Components/Layout';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
