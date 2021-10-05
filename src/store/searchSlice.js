import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getMovieByName} from '../services/movieDBServise'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function(text, {rejectWithValue}) {
    try {
      const response = await getMovieByName(text);
      return response.Search
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
const initialState = {
        text: '',
        movies: [],
        movie: [],
        status: '',
        error: null
      };

const searchSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      searchMovie(state, action) {
          console.log(state)
          console.log(action)
        state.text = action.payload
      },
      loadMovies(state, action) {
        state.movies = action.payload
      }
    },
    extraReducers: {
      [fetchMovies.pending] : (state) => {
        state.status = 'loading';
        state.error = null
      },
      [fetchMovies.fulfilled] : (state, action) => {
        state.status = 'fulfilled';
        state.movies = action.payload
      },
      [fetchMovies.rejected] : (state, action) => {
        state.status = 'rejected';
        state.error = action.payload
      }
     }
}) 

export const { searchMovie, loadMovies } = searchSlice.actions
export const searchReducer = searchSlice.reducer

   
      
