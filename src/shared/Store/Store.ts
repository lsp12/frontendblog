import { configureStore } from '@reduxjs/toolkit';
import appSlice from './ActionApp/app.slice';

export const Store = configureStore({
  reducer: {
    appSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
