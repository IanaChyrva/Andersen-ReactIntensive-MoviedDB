import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovieItem } from '../movie-item/MovieItem'
import { useEffect } from 'react'
import { fetchMovies } from '../../store/moviesSlice'
import imageNotFound from '../../assets/images/nothing-icon.jpg'
import './moviesList.css'

;
export const MoviesList = () => {
    const parsedUrl = new URL(window.location.href);
    const text = parsedUrl.searchParams.get("text");
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies(text)) 
    }, [text])

    const MoviesBlock = () => {
        return (
            <div className='moviesList'>
                {movies.map((item, index) => <MovieItem key={index} movie={item}/>)}
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
    const content = status === 'rejected' ? < MovieNotFound/> : <MoviesBlock/>
    return(
        <>
            {content}
        </>   
    )
}