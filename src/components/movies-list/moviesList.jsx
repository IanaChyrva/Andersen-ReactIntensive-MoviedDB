import React from 'react';
import { useSelector } from 'react-redux';
import { MovieItem } from '../movie-item/MovieItem';
import imageNotFound from '../../assets/images/nothing-icon.jpg';
import './moviesList.css';

export const MoviesList = () => {
  const { movies, status } = useSelector((state) => state.movies);

  const MoviesBlock = () => {
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const { movies, status } = useSelector((state) => state.movies);
    console.log(movies);

    return (
      <div className='moviesList'>
        {movies.map((item, index) => (
          <MovieItem key={index} movie={item} isLoggedIn={isLoggedIn} />
        ))}
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
