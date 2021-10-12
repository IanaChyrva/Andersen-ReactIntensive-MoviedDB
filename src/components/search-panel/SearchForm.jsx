import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux'
// import { setInputValue } from '../../store/moviesSlice';
// import { changeSelectedType } from '../../store/moviesSlice'

import './searchPanel.css'

export const SearchForm = () => {
    const [value, setValue] = useState('')
    // const value = useSelector(state => state.movies.inputValue)
    // const dispatch = useDispatch()
    let history = useHistory();
    const onFetch = (e) => {
      e.preventDefault();
      history.push(`/search?text=${value}`)
      window.location.reload()
      setValue('')
    }
    const onValueChange = (e) => {
      const value = e.target.value
      setValue(value)
    }
    // const onValueChange = (e) => {
    //   const value = e.target.value
    //   dispatch(setInputValue(value))
    // }
    // const onSelectValueGet = (e) => {
    //   const selectedIndex = e.target.options.selectedIndex
    //   dispatch(changeSelectedType(e.target.options[selectedIndex].value))
    // }

    return (
       <div className='searchForm'>
            <form className='searchForm' onSubmit={onFetch}>
            <input 
            value={value}
            type='search'
            placeholder="Название фильма или сериала"
            onChange={(e) => {onValueChange(e)}}/>
            {/* <select className='searchForm-select' required onChange={(e) => {onSelectValueGet(e)}}>
            <option disabled selected>Выберите тип</option>
            <option value='movie'>фильм</option>
            <option value='series'>сериал</option>
            <option value='all'>все</option>
            </select> */}
            <button type="submit" className="btn btn-primary btn-bg">
              Найти
            </button>
        </form>
       </div>
    )
}
