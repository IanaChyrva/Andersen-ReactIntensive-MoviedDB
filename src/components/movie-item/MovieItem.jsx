import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../store/userAccountSlice';
import './movieItem.css';
import classnames from 'classnames';
import { FaBookmark } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';

export const MovieItem = (props) => {
  const { title, year, posterUrl, id } = props.movie;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const dispatch = useDispatch();

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    dispatch(
      toggleFavourite({
        movieData: {
          title,
          year,
          posterUrl,
          id,
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
              hidden: !props.isLoggedIn,
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
