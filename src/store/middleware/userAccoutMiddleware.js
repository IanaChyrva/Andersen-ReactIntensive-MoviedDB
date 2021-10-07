import { signup, login, logout, getUsers, startApp } from '../userAccountSlice';

export const userAccoutMiddleware = (store) => (next) => (action) => {
  next(action);

  if (startApp.match(action)) {
    const storedUsers = localStorage.getItem('sign-up-info');
    const currentUser = localStorage.getItem('current-user');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    store.dispatch(
      getUsers({
        users: JSON.parse(storedUsers),
        isLoggedIn: JSON.parse(isLoggedIn),
        currentUser: JSON.parse(currentUser),
      })
    );

    console.log('currentUser', JSON.parse(currentUser));
    console.log(store.getState().users);
  }

  if (signup.match(action)) {
    const users = store.getState().users.users;
    localStorage.setItem('sign-up-info', JSON.stringify(users));
  }

  if (login.match(action)) {
    console.log('login');
    const currentUser = store.getState().users.currentUser;
    localStorage.setItem('current-user', JSON.stringify(currentUser));
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  if (logout.match(action)) {
    console.log('logout');
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('current-user');
  }
};
