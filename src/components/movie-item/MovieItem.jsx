import React from 'react'
import './movieItem.css'

export const MovieItem = (props) => {
    const {title, year, posterUrl} = props.movie
    return (
      <div className="card movieCard">
      <img src={posterUrl} className="card-img-top movieCard_img"alt="постер"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text yearInfo">{year}</p>
        <div className='detailsLink'>
          <a href="#">Подробнее</a>
        </div>
      </div>
      </div>
    )
}