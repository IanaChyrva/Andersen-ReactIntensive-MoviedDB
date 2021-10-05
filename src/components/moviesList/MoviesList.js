import React from 'react'
import { useSelector } from 'react-redux'
import { MovieItem } from '../movieItem/MovieItem'

export const MoviesList = () => {
    const moviesArr = useSelector(state => state.movies.movies)
    // const content = moviesArr.length > 0 ? moviesArr.map((item, index) => <MovieItem key={index} movie={item}/>) : null
    return(
        <div className='d-flex flex-row flex-wrap'>
            {moviesArr.map((item, index) => <MovieItem key={index} movie={item}/>)}
        </div>
    )
}