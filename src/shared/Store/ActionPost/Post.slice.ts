import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../Interface/rest.interface';
import { getPostController, getPosts, myPostController } from './Post.reducer';

interface IPostSlice{
  posts: IPost[];
  loading: boolean;
  post?: IPost;
  myPosts?: IPost[];
}

const initialState:IPostSlice = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( getPosts.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getPosts.fulfilled, ( state, action ) => {
        state.posts = action.payload!;
        state.loading = false;
      })
      .addCase( getPosts.rejected, ( state ) => {
        state.loading = false;
      });
    builder
      .addCase( getPostController.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getPostController.fulfilled, ( state, action ) => {
        state.post = action.payload!;
        state.loading = false;
      })
      .addCase( getPostController.rejected, ( state ) => {
        state.loading = false;
      });
    builder
      .addCase( myPostController.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( myPostController.fulfilled, ( state, action ) => {
        state.myPosts = action.payload!;
        state.loading = false;
      });
  },

});

export default postSlice.reducer;
