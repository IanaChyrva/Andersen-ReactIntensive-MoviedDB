import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchMovies } from '../../store/moviesSlice'
import './searchPanel.css'

export const SearchPanel = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const onValueChange = (e) => {
      setText(e.target.value)
  }
  const onFetch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(text));
    setText('')
  }
  return(
    <div className='searchPanel'>
        <h1>
            Поиск фильмов и сериалов ..
        </h1>
        <form id="searchForm" onSubmit={onFetch}>
            <input
              value={text}
              type="text"
              name="searchText"
              placeholder="Поиск фильмов и сериалов "
              onChange={onValueChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
    </div>
  )
}

