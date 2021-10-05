import {useDispatch, useSelector} from 'react-redux'
import { searchMovie} from '../../store/searchSlice'
import { fetchMovies } from '../../store/searchSlice'
import './searchPanel.css'

export const SearchPanel = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.movies.text)
    const onValueChange = (e) => {
        dispatch(searchMovie(e.target.value))
    }
    const onFetch = (e) => {
      e.preventDefault();
      dispatch(fetchMovies(text))
    }
    return(
      <div className='searchPanel'>
          <h1>
              Поиск фильмов и сериалов ..
          </h1>
          <form id="searchForm" onSubmit={onFetch}>
              <input
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

