import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieItem } from '../movie-item/MovieItem';

import {
  fetchMovies,
  cleanMovies,
  fetchFilteredMovies,
  cleanSelectedType,
} from '../../store/moviesSlice';
import imageNotFound from '../../assets/images/nothing-icon.jpg';
import { Spinner } from '../spinner/spinner';
import './moviesList.css';

export const MoviesList = () => {
  const { movies, status } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const parsedUrl = new URL(window.location.href);

  const params = parsedUrl.searchParams;
  let text = params.get('text');
  let type = params.get('type');

  useEffect(() => {
    if (type === 'movie' || type === 'series') {
      dispatch(fetchFilteredMovies({ text, type }));
    } else {
      dispatch(fetchMovies(text));
    }
    return function cleanup() {
      dispatch(cleanMovies());
      dispatch(cleanSelectedType());
    };
  }, [text]);

  const MoviesBlock = () => {
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const users = useSelector((state) => state.users);

    const moviesArray = !isLoggedIn
      ? [...movies]
      : movies.map((movie) => ({
          ...movie,
          isMovieBookmarked: users.currentUser.favouriteMovies.includes(
            movie.imdbId
          ),
        }));

    return (
      <div className='moviesList'>
        {moviesArray.map((item) => {
          return (
            <MovieItem key={item.imdbId} movie={item} isLoggedIn={isLoggedIn} />
          );
        })}
      </div>
    );
  };

  const MovieNotFound = () => {
    return (
      <div className='blockNotFound'>
        <p className='blockNotFound_text'>Movie not found</p>
        <img src={imageNotFound} alt='not found'></img>
      </div>
    );
  };
  let content;

  if (status === 'loading') {
    content = <Spinner />;
  } else {
    content = movies.length > 0 ? <MoviesBlock /> : <MovieNotFound />;
  }

  return <>{content}</>;
};
