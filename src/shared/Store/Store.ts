import { configureStore } from '@reduxjs/toolkit';
import appSlice from './ActionApp/app.slice';
import postSlice from './ActionPost/Post.slice';
import comentsSlice from './ActionConments/Conments.slice';
import authSlice from './ActionAuth/Auth.slice';

export const Store = configureStore({
  reducer: {
    appSlice,
    postSlice,
    comentsSlice,
    authSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
