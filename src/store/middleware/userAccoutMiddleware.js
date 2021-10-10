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

  if (toggleFavourite.match(action)) {
    // как я вижу решение добавления/удаления избранных фильмов
    // 1. при клике на значок нужно изменить массив сохраненных фильмов у конкретного пользователя влокальном хранилище. Для этого нужно в локальном хранилище найти этого пользователя среди всех созданных(я нахожу его индекс).

    // Если в payload прилетает isBookmarked true -  добавляю фильм в массив избранных фильмов, если false - удаляю

    // console.log(action.payload.movieData);
    // console.log(action.payload.isBookmarked);

    const users = JSON.parse(localStorage.getItem('sign-up-info'));
    // console.log('users', users);
    const { currentUser } = store.getState().users;

    const userIndex = users.findIndex((user) => {
      return (
        user.userInfo.email === currentUser.userInfo.email &&
        user.userInfo.password === currentUser.userInfo.password
      );
    });
    // console.log(users[userIndex].favouriteMovies);
    if (action.payload.isBookmarked) {
      //добавить в массив избранных фильмов тот, который isBookmarked
      users[userIndex].favouriteMovies = [
        ...users[userIndex].favouriteMovies,
        action.payload.movieData,
      ];
      localStorage.setItem('sign-up-info', JSON.stringify(users));
      localStorage.setItem('current-user', JSON.stringify(users[userIndex]));
    }
    if (!action.payload.isBookmarked) {
      //отфильтровать массив данных и удалить, который !isBookmarked

      users[userIndex].favouriteMovies = [
        ...users[userIndex].favouriteMovies.filter((movie) => {
          return movie.title !== action.payload.movieData.title;
        }),
      ];
      localStorage.setItem('sign-up-info', JSON.stringify(users));
      localStorage.setItem('current-user', JSON.stringify(users[userIndex]));
    }
  }
};
