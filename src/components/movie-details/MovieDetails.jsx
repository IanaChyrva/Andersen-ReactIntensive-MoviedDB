import React from 'react'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../../services/movieDBServise'

import './movieDetails.css'

export const MovieDetails = (props) => {
    const [movieDetails, setMovieDetails] = useState([])
    const {title, genre, country, posterUrl, type, released, director, plot} = movieDetails
    const fetchMovieDetails = async function(id) {
        const response = await getMovieDetails(id)
        setMovieDetails(response)
      }
      useEffect(() => {
            fetchMovieDetails(props.match.params.id)
            return function cleanup() {
               setMovieDetails([])
            }
          }, 
    [props.match.params.id])

    return (
        <div className="card mb-3" style={{maxWidth: 700}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={posterUrl} className="img-fluid rounded-start" alt="poster"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{plot}</p>
                    </div> 
                    <li className="card-item">Genre: {genre}</li>
                    <li className="card-item">Released: {released}</li>
                    <li className="card-item">Country: {country}</li>
                    <li className="card-item">Director: {director}</li>
                    <li className="card-item">Type: {type}</li>
                </div>
            </div>
        </div>
    )
}