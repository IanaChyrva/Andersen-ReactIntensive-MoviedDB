import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieItem } from '../movie-item/MovieItem';
import { useEffect } from 'react';
import { fetchMovies, cleanMovies } from '../../store/moviesSlice';
import imageNotFound from '../../assets/images/nothing-icon.jpg';
import './moviesList.css';

export const MoviesList = () => {
  const { movies, status } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const parsedUrl = new URL(window.location.href);

  const text = parsedUrl.searchParams.get('text');
  useEffect(() => {
    dispatch(fetchMovies(text));
    return function cleanup() {
      dispatch(cleanMovies());
    };
  }, [dispatch, text]);

  const MoviesBlock = () => {
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const { movies, status } = useSelector((state) => state.movies);

    return (
      <div className='moviesList'>
        {movies.map((item) => {
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

  const content = status === 'rejected' ? <MovieNotFound /> : <MoviesBlock />;
  return <>{content}</>;
};
