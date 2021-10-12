import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getMovieByName, getFilteredMoviesTransform} from '../services/movieDBServise'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (text) {
      const response = await getMovieByName(text);
      return response;
  }
 
)
export const fetchFilteredMovies = createAsyncThunk(
  'movies/fetchFilteredMovies',
  async function(data) {
    const {text, type} = data;
    const response = await getFilteredMoviesTransform(text, type)
    return response
  }
)

const initialState = {
        movies: [],
        // inputValue: '',
        // movieDetails: [],
        selectedType: 'all',
        status: '',
      };

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      cleanMovies(state) {
        state.movies = []
      },
      changeSelectedType(state, action) {
        state.selectedType = action.payload
      },
      cleanSelectedType(state) {
        state.selectedType = 'all'
      },
      setInputValue(state, action) {
        state.inputValue = action.payload
      }
    },
    extraReducers: {
      [fetchMovies.pending] : (state) => {
        state.status = 'loading';
      },
      [fetchMovies.fulfilled] : (state, action) => {
        state.movies = action.payload
        state.status = 'fulfilled'
      },
      [fetchMovies.rejected] : (state) => {
        state.status = 'rejected';
      },
      [fetchFilteredMovies.fulfilled]: (state, action) => {
        state.movies = action.payload
        state.status = 'fulfilled'
      },
      [fetchFilteredMovies.pending] : (state) => {
        state.status = 'loading';
      },
    }
}) 

export const { cleanMovies, changeSelectedType, cleanSelectedType} = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer

