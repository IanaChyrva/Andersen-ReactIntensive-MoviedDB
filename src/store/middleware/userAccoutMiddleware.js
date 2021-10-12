import {
  signup,
  login,
  logout,
  getUsers,
  startApp,
  toggleFavourite,
} from '../userAccountSlice';

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
  }

  if (signup.match(action)) {
    const users = store.getState().users.users;
    localStorage.setItem('sign-up-info', JSON.stringify(users));
  }

  if (login.match(action)) {
    const currentUser = store.getState().users.currentUser;
    localStorage.setItem('current-user', JSON.stringify(currentUser));
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  if (logout.match(action)) {
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('current-user');
  }

  if (toggleFavourite.match(action)) {
    const users = JSON.parse(localStorage.getItem('sign-up-info'));
    const { currentUser } = store.getState().users;
    const userIndex = users.findIndex((user) => {
      return (
        user.userInfo.email === currentUser.userInfo.email &&
        user.userInfo.password === currentUser.userInfo.password
      );
    });

    if (action.payload.isBookmarked) {
      users[userIndex].favouriteMovies = [
        ...users[userIndex].favouriteMovies,
        action.payload.id,
      ];

      localStorage.setItem('sign-up-info', JSON.stringify(users));
      localStorage.setItem('current-user', JSON.stringify(users[userIndex]));
    }

    if (!action.payload.isBookmarked) {
      const filteredMovies = currentUser.favouriteMovies.filter(
        (movieId) => movieId !== action.payload.id
      );

      users[userIndex].favouriteMovies = filteredMovies;
      localStorage.setItem('sign-up-info', JSON.stringify(users));
      localStorage.setItem('current-user', JSON.stringify(users[userIndex]));
    }
  }
};
