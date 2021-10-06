import { signup, login, logout, getUsers, startApp } from '../userAccountSlice';

export const userAccoutMiddleware = (store) => (next) => (action) => {
  next(action);
  if (startApp.match(action)) {
    const storedUsers = localStorage.getItem('sign-up-info');
    store.dispatch(getUsers(JSON.parse(storedUsers)));
  }

  if (signup.match(action)) {
    const users = store.getState().users.users;
    localStorage.setItem('sign-up-info', JSON.stringify(users));
  }
};
