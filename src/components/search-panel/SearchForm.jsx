import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

import './searchPanel.css'

export const SearchForm = () => {
    const [value, setValue] = useState('')
    let history = useHistory();
    const onFetch = (e) => {
      e.preventDefault();
      history.push(`/search?text=${value}`)
      window.location.reload()
      console.log('reload')
      setValue('')
    }
    const onValueChange = async (e) => {
      const value = e.target.value
      setValue(value)
    }

    return (
       <div className='searchForm'>
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
       </div>
    )
}