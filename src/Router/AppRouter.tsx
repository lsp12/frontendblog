/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../Module/Login/view/Login';
import { Register } from '../Module/Register/view/Register';
import { MyPost } from '../Module/myPost/view/MyPost';
import User from '../Module/User/User';
import { Layout } from '../shared/Components/Layout/Layout';
import { Home } from '../Module/Home/view/Home';
import { ViewPost } from '../Module/viewPost/view/ViewPost';

const AppRouter = () => (
  <BrowserRouter>
    {/*  <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes> */}
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ViewPost />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<h1> no existe</h1>} />
      </Routes>
    </Layout>

  </BrowserRouter>
);

export default AppRouter;
