import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getMovieByName} from '../services/movieDBServise'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function(text, {rejectWithValue}) {
    try {
      const response = await getMovieByName(text);
      console.log(response)
      return response
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
const initialState = {
        text:'',
        movies: [],
        movie: [],
        status: '',
        error: null
      };

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      loadMovies(state, action) {
        state.movies = action.payload
        console.log(state.movies)
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

export const { loadMovies, getMovies } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer

   
      
