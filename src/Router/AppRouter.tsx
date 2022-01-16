/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Login } from '../Module/Login/view/Login';
import { Register } from '../Module/Register/view/Register';
import { MyPost } from '../Module/myPost/view/MyPost';
import User from '../Module/User/User';
import { Layout } from '../shared/Components/Layout/Layout';
import { Home } from '../Module/Home/view/Home';
import { ViewPost } from '../Module/viewPost/view/ViewPost';
import { useAppSelector } from '../shared/Store/Hook';

const AppRouter = () => {
  const { authethicated } = useAppSelector(( state ) => state.authSlice );

  return (
    <BrowserRouter>

      {/* <Layout> */}
      <Routes>
        {authethicated === false ? (
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="card/:id" element={<ViewPost />} />
              <Route path="/mypost" element={<MyPost />} />
              <Route path="/profile" element={<User />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}

      </Routes>
      {/* </Layout> */}

    </BrowserRouter>
  );
};

export default AppRouter;
