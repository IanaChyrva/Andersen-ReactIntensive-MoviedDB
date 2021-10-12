import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { MovieItem } from '../movie-item/MovieItem'
import { fetchMovies, cleanMovies, fetchFilteredMovies, cleanSelectedType } from '../../store/moviesSlice'
import { Spinner } from '../spinner/spinner'
import imageNotFound from '../../assets/images/nothing-icon.jpg'

import './moviesList.css';

export const MoviesList = () => {
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const parsedUrl = new URL(window.location.href);
    const params = parsedUrl.searchParams
    let text = params.get('text')
    let type = params.get('type')

    useEffect(() => {
        if(type === 'movie' || type === 'series') {
            dispatch(fetchFilteredMovies({text, type}))
        } else {
            dispatch(fetchMovies(text))
        }
        return function cleanup() {
            dispatch(cleanMovies())
            dispatch(cleanSelectedType())  
        }
    }, [text])

   
    const MoviesBlock = () => {
        return (
            <div className='moviesList'>
                {movies.map((item) => <MovieItem key={item.imdbId} movie={item}/>)}
            </div>
        )
    } 
    const MovieNotFound = () => {
        return (
            <div className='blockNotFound'>
                <p className='blockNotFound_text'>Movie not found</p>
                <img src={imageNotFound} alt='not found'></img>
            </div>
        )
    }
    let content
    if(status === 'loading') {
        content = <Spinner/>
    } else {
        content = movies.length > 0  ?  <MoviesBlock/> : < MovieNotFound/> 
    }
 
    return(
        <>
        {content}
        </>   
    )
}


