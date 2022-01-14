import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Module/Home/view/Home';

import Login from '../Module/Login/view/Login';
import User from '../Module/User/User';
import { Layout } from '../shared/Components/Layout/Layout';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<h1> no existe</h1>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
