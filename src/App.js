import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';

import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Header />
      <div className='body'>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
