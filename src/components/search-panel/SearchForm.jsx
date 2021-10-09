// import React from 'react';
// import { useState } from 'react'
// // import {useDispatch, useSelector} from 'react-redux'
// import { useHistory } from "react-router-dom";
// // import { getMovies } from '../../store/moviesSlice';
// import './SearchPanel.css'

// export const SearchForm = () => {
//   const [text, setText] = useState('')
//   // const text = useSelector(state => state.movies.text)
//   // const dispatch = useDispatch()
//   let history = useHistory();
//   const onValueChange = (e) => {
//       setText(e.target.value)
//       // dispatch(getMovies(e.target.value))
//   }
//   const onFetch = (e) => {
//     e.preventDefault();
//     history.push(`/search?text=${text}`)
//     console.log(text)
//     setText('')
//   }
//   return(
//     <div className='searchForm'>
//         <form id="searchForm" onSubmit={onFetch}>
//             <input
//               value={text}
//               type="text"
//               name="searchText"
//               placeholder="Поиск фильмов и сериалов "
//               onChange={onValueChange}
//             />
//             <button type="submit" className="btn btn-primary btn-bg">
//               Найти
//             </button>
//           </form>
//     </div>
//   )
//   }

import React from 'react'
import {useState, useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { getResource } from '../../services/movieDBServise'

export const SearchForm = () => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    let history = useHistory();
    const onFetch = (e) => {
      e.preventDefault();
      console.log(value)
      history.push(`/search?text=${value}`)
      window.location.reload()
      setValue('')
    }
    const onValueChange = async (e) => {
      const value = e.target.value
        setValue(value)
        // getSuggestions(value)
        debouncedGetSuggestions(value)
  
        // const res = await getResource(`http://www.omdbapi.com/?apikey=a445a5cd&s=${e.target.value}`)
        // const dataForSuggestions = res.Response === 'False' ? [] : res.Search.slice(0, 4).map(sug => sug.Title)   
        // setSuggestions(dataForSuggestions) 
    }
    const getSuggestions = async (value)=> {
      const res = await getResource(`http://www.omdbapi.com/?apikey=a445a5cd&s=${value}`)
      const dataForSuggestions = res.Response === 'False' ? [] : res.Search.slice(0, 4).map(sug => sug.Title)   
      setSuggestions(dataForSuggestions) 
    }
    const debouncedGetSuggestions = useCallback(debounce(value => getSuggestions(value), 500), [])
     

    // const retrieveDataAsynchronously = async (text) => {
    //     const res = await getResource(`http://www.omdbapi.com/?apikey=a445a5cd&s=${text}`)
    //     console.log(res)
    //     return res
    //     } 
    
        const suggestionsBlock = suggestions.length > 0 ?
            suggestions.map((suggestion, i) => 
                <li key={i}>{suggestion}</li>)
              : null
 
    return (
       <div className='searchForm'>
            <form id="searchForm" onSubmit={onFetch}>
            <input 
            value={value}
            type='search'
            placeholder="Название фильма или сериала"
            onChange={(e) => {onValueChange(e)}}/>
        </form>
        <ul className='searchForm_suggestions'>
        {suggestionsBlock}
        </ul>
        
        
       </div>
    )
}

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