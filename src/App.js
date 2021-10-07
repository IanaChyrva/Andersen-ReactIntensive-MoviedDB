import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <div className='body'>
        <Sidebar />
        <Main/>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
