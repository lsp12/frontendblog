import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../Interface/rest.interface';

interface IState {
  modalOpen: boolean;
  openDeleteModal: boolean;
  comments: boolean;
  crearComent: boolean;
  post?: IPost;
}

const initialState:IState = {
  modalOpen: false,
  comments: false,
  crearComent: false,
  openDeleteModal: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openModal: ( state, action:PayloadAction<boolean> ) => {
      state.modalOpen = action.payload;
      if ( action.payload === false ) {
        state.post = undefined;
      }
    },
    openComents: ( state, action:PayloadAction<boolean> ) => {
      state.comments = action.payload;
    },
    openCrearComent: ( state, action:PayloadAction<boolean> ) => {
      state.crearComent = action.payload;
    },
    DeleteModalReducer: ( state, action:PayloadAction<boolean> ) => {
      state.openDeleteModal = action.payload;
      if ( action.payload === false ) {
        state.post = undefined;
      }
    },
    setPost: ( state, action:PayloadAction<IPost> ) => {
      state.post = action.payload;
    },
    setDeletePost: ( state, action:PayloadAction<IPost> ) => {
      state.post = action.payload;
    },
  },
});

export const {
  openModal, openComents, openCrearComent, setPost, DeleteModalReducer,
} = appSlice.actions;
export default appSlice.reducer;
