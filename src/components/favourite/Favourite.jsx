import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchFavourites } from '../../services/fetchFavourites';
import { MovieItem } from '../movie-item/MovieItem';
import { Spinner } from '../spinner/spinner';

const Favourite = () => {
  const moviesIds = useSelector(
    (state) => state.users.currentUser.favouriteMovies
  );
  const [movies, setMovies] = useState(null);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    fetchFavourites(setMovies, moviesIds);
  }, [moviesIds]);

  return (
    <>
      {movies ? (
        <div className='moviesList'>
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbId}
                movie={movie}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Favourite;
