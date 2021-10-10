import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getMovieByName, getMovieDetails} from '../services/movieDBServise'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (text, { rejectWithValue }) {
    try {
      const response = await getMovieByName(text);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async function(id) {
    const response = await getMovieDetails(id)
    console.log(response)
    return response
  }
)
const initialState = {
        movies: [],
        movieDetails: [],
        status: '',
        error: null
      };

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      cleanMovies(state) {
        state.movies = []
      },
      cleanMovieDetails(state) {
        state.movieDetails = []
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
      },
      [fetchMovieDetails.fulfilled] : (state, action) => {
        state.movieDetails = action.payload
      },
     },
}) 

export const { cleanMovies, cleanMovieDetails } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer

// export const { loadMovies } = moviesSlice.actions;
// export const moviesReducer = moviesSlice.reducer;
