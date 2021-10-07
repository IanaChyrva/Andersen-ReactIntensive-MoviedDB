import React from 'react';
import { useState } from 'react'
// import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import './SearchPanel.css'

export const SearchForm = () => {
  const [text, setText] = useState('')
  let history = useHistory();
  const onValueChange = (e) => {
      setText(e.target.value)
  }
  const onFetch = (e) => {
    e.preventDefault();
    history.push(`/search?text=${text}`)
    setText('')
  }
  return(
    <div className='searchForm'>
        <form id="searchForm" onSubmit={onFetch}>
            <input
              value={text}
              type="text"
              name="searchText"
              placeholder="Поиск фильмов и сериалов "
              onChange={onValueChange}
            />
            <button type="submit" className="btn btn-primary btn-bg">
              Найти
            </button>
          </form>
    </div>
  )
  }