
import React from 'react'
import {useState, useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getResource } from '../../services/movieDBServise'
import './searchPanel.css'

const debounce = (func) => {
  let timer
  return function(...args) {
    const context = this
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, 500)
  }
}

export const SearchFormSuggest = () => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    let history = useHistory();
    const onFetch = (e) => {
      e.preventDefault();
      history.push(`/search?text=${value}`)
      setValue('')
    }
    const onValueChange = async (e) => {
      const value = e.target.value
        setValue(value)
        debouncedGetSuggestions(value)
    }
    const getSuggestions = async (value)=> {
      const res = await getResource(`http://www.omdbapi.com/?apikey=a445a5cd&s=${value}`)
      const dataForSuggestions = res.Response === 'False' ? [] : res.Search.slice(0, 4)  
      setSuggestions(dataForSuggestions)
    }
    const debouncedGetSuggestions = useCallback(debounce(value => getSuggestions(value)), [])

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

