<<<<<<< HEAD
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
=======
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMovies } from '../../store/moviesSlice';
import './searchPanel.css';

export const SearchForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();
  const onValueChange = (e) => {
    setText(e.target.value);
  };
  const onFetch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(text));
    history.push('/search');
    setText('');
  };
  return (
    <div className='searchForm'>
      <form id='searchForm' onSubmit={onFetch}>
        <input
          value={text}
          type='text'
          name='searchText'
          placeholder='Поиск фильмов и сериалов '
          onChange={onValueChange}
        />
        <button type='submit' className='btn btn-primary btn-bg'>
          Найти
        </button>
      </form>
    </div>
  );
};
>>>>>>> 2ad999ae629ead188baac932497bc8212345be77
