import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import HeaderLoggedIn from './components/header/HeaderLoggedIn';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <HeaderLoggedIn />
      <Header />
      <div className='body'>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
