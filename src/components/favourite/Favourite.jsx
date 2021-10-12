import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { login } from '../../store/userAccountSlice';
import TestCardForFilm from './TestCardForFilm';

import { fetchFavourites } from '../../services/fetchFavourites';

const Favourite = () => {
  const moviesIds = useSelector(
    (state) => state.users.currentUser.favouriteMovies
  );
  const [movies, setMovies] = useState(null);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    fetchFavourites(setMovies, moviesIds);
  }, [moviesIds]);

  if (movies) {
    return (
      <div className='moviesList'>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <TestCardForFilm
                movie={movie}
                isLoggedIn={isLoggedIn}
                isMovieBookmarked={true}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <div>Favourite</div>
    </div>
  );
};

export default Favourite;
