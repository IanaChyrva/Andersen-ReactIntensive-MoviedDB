import React from 'react';
import { useSelector } from 'react-redux';
import TestCardForFilm from './TestCardForFilm';

const Favourite = () => {
  const savedMovies = useSelector(
    (state) => state.users.currentUser.favouriteMovies
  );
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  return (
    <div>
      <div>Favourite</div>
      <div className='moviesList'>
        {savedMovies.map((movie) => {
          return (
            <div key={movie.movieData.id}>
              <TestCardForFilm
                movie={movie.movieData}
                isLoggedIn={isLoggedIn}
                isMovieBookmarked={movie.isBookmarked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
