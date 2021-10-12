
import React from 'react'
import {useState, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeSelectedType} from '../../store/moviesSlice'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getResource } from '../../services/movieDBServise'
import { getFilteredMovies } from '../../services/movieDBServise';
import { debounce } from '../../utility';
import './searchPanel.css'


export const SearchFormSuggest = () => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const {selectedType} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    let history = useHistory();
    const onFetch = (e) => {
      e.preventDefault();
      history.push(`/search?text=${value}&type=${selectedType}`)
      setValue('')
    }
    const onValueChange = (e) => {
      const value = e.target.value
        setValue(value)
        debouncedGetSuggestions(value)
    }
    const onSelectValueGet = (e) => {
      const selectedIndex = e.target.options.selectedIndex
      dispatch(changeSelectedType(e.target.options[selectedIndex].value))
    }
 
    useEffect(() => {
      getSuggestions(value, selectedType)
    },[selectedType])

    const getSuggestions = async (value, type)=> {
      let res
      if(type === 'all') {
        res = await getResource(`http://www.omdbapi.com/?apikey=a445a5cd&s=${value}`)
      } else {
        res = await getFilteredMovies(value, type )
      }
      const dataForSuggestions = res.Response === 'False' ? [] : res.Search.slice(0, 4)  
      setSuggestions(dataForSuggestions)
    }
    const debouncedGetSuggestions = useCallback(debounce(value => getSuggestions(value, selectedType)), [])
    const suggestionsBlock = suggestions.length > 0 ?
        suggestions.map((suggestion, i) => 
            <Link to={`/movie/${suggestion.imdbID}`} key={i} className='searchPanel_link'>{suggestion.Title}</Link>)
          : null
 
    return (
       <div className='searchPanel'>
        <h1>Поиск фильмов и сериалов...</h1>
        <form className='searchForm' onSubmit={onFetch}>
        <input 
        value={value}
        type='search'
        placeholder="Название фильма или сериала"
        onChange={(e) => {onValueChange(e)}}/>
        <select className='searchForm-select' required onChange={(e) => {onSelectValueGet(e)}}>
        <option disabled selected>Выберите тип</option>
        <option value='movie'>фильм</option>
        <option value='series'>сериал</option>
        <option value='all'>все</option>
        </select>
        <button type="submit" className="btn btn-primary btn-bg">
          Найти
        </button>
        </form>
        <ul>
        {suggestionsBlock}
        </ul> 
      </div>
    )
}

