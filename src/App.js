import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/header/Header';

import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import { SearchPanel } from './components/searchPanel/SearchPanel';
import store from './store/index';
import {MoviesList} from './components/moviesList/MoviesList'


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
      <div className='body'>
        <Sidebar />
        <Main/>
        <SearchPanel/>
      </div>
      <Route path='/search'>
        <MoviesList />
      </Route>
    </Router>
    </Provider>
    
  );
}

export default App;
