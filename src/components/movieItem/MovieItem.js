import React from 'react'

export const MovieItem = (props) => {
    const {title, year, imgUrl} = props.movie
    return (
        <>
<div className="card style={{width: '18rem'}}">
  <img src={imgUrl} className="card-img-top" alt="постер"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{year}</p>
  </div>
  {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul> */}
  <div className="card-body">
    {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
</>
    )
}
