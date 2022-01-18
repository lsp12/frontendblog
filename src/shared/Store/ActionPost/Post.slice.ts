import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../Interface/rest.interface';
import {
  getPostController, getPosts, myPostController, SearchPostController,
} from './Post.reducer';

interface IPostSlice{
  posts: IPost[];
  loading: boolean;
  post?: IPost;
  myPosts?: IPost[];
  searchExit: boolean;
}

const initialState:IPostSlice = {
  posts: [],
  loading: false,
  searchExit: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    closeSearch: ( state ) => {
      state.searchExit = false;
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( getPosts.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getPosts.fulfilled, ( state, action ) => {
        state.posts = action.payload!;
        state.loading = false;
        state.searchExit = false;
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
    builder
      .addCase( SearchPostController.fulfilled, ( state, action ) => {
        console.log( action.payload );
        if ( action.payload === undefined ) {
          state.searchExit = false;
        } else {
          state.posts = action.payload!;
          state.searchExit = true;
        }
      });
  },

});

export const { closeSearch } = postSlice.actions;

export default postSlice.reducer;
