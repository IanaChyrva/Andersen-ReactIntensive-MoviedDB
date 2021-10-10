import React, { useState } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../../store/userAccountSlice';
import { FaBookmark } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';

const TestCardForFilm = ({ movie, isMovieBookmarked, isLoggedIn }) => {
  const { title, year, posterUrl } = movie;
  const [isBookmarked, setIsBookmarked] = useState(isMovieBookmarked);
  const dispatch = useDispatch();

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    dispatch(
      toggleFavourite({
        movieData: {
          title,
          year,
          posterUrl,
        },
        isBookmarked: !isBookmarked,
      })
    );
  };

  return (
    <div className='card movieCard'>
      <img
        src={posterUrl}
        className='card-img-top movieCard_img'
        alt='постер'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text yearInfo'>{year}</p>
        <div className='card-bottom'>
          <div className='detailsLink'>
            <a href='#'>Подробнее</a>
          </div>
          <div
            className={classnames('bookmark toggledOff', {
              hidden: !isLoggedIn,
            })}
            onClick={handleToggleBookmark}
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCardForFilm;
