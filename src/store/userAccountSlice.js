import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  users: [],
  currentUser: null,
  startApp: false,
};

const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users = [...state.users, action.payload];
    },

    login: (state, action) => {
      state.currentUser = action.payload.currentUser || null;
      state.isLoggedIn = true;
    },

    logout: (state, action) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },

    getUsers: (state, action) => {
      state.users = action.payload.users || [];
      state.isLoggedIn = action.payload.isLoggedIn || false;
      state.currentUser = action.payload.currentUser || null;
    },

    startApp: (state) => {
      state.startApp = true;
    },
  },
});

export const userAccountReducer = userAccountSlice.reducer;
export const { signup, login, logout, getUsers, startApp } =
  userAccountSlice.actions;