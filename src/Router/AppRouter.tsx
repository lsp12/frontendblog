/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Cookies from 'js-cookie';
import { Login } from '../Module/Login/view/Login';
import { Register } from '../Module/Register/view/Register';
import { MyPost } from '../Module/myPost/view/MyPost';
import User from '../Module/User/User';
import { Layout } from '../shared/Components/Layout/Layout';
import { Home } from '../Module/Home/view/Home';
import { ViewPost } from '../Module/viewPost/view/ViewPost';
import { useAppSelector } from '../shared/Store/Hook';
import { PostRange } from '../Module/PostRander/view/PostRange';
import { RecoverKey } from '../Module/RecoverKey/View/RecoverKey';

const AppRouter = () => {
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  const token = Cookies.get( 'token' );
  return (
    <BrowserRouter>

      {/* <Layout> */}
      <Routes>
        {authethicated === false && token === undefined && (
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="login" />} />
          </>
        ) }
        <Route path="/recovery" element={<RecoverKey />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/range" element={<PostRange />} />
          {authethicated === true && token !== undefined && (
            <>
              <Route path="/mypost" element={<MyPost />} />
              <Route path="/profile" element={<User />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>

          )}
          <Route path="card/:id" element={<ViewPost />} />
        </Route>
      </Routes>
      {/* </Layout> */}

    </BrowserRouter>
  );
};

export default AppRouter;
