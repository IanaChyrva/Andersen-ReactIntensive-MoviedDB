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
      //user login
    },

    logout: (state, action) => {
      //user logout
    },

    getUsers: (state, action) => {
      state.users = action.payload || [];
    },

    startApp: (state) => {
      state.startApp = true;
    },
  },
});

export const userAccountReducer = userAccountSlice.reducer;
export const { signup, login, logout, getUsers, startApp } =
  userAccountSlice.actions;
