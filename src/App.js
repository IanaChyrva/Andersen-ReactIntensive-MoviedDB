import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';

import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import { SearchPanel } from './components/search-panel/searchPanel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { startApp } from './store/userAccountSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  dispatch(startApp());
  return (
    <Router>
      <Header />
      <div className='body'>
        <Sidebar />
        <Main />
        <SearchPanel />
      </div>
    </Router>
  );
}

export default App;
