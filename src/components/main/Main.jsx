import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favourite from '../favourite/Favourite';
import History from '../history/History';
import Home from '../home/Home';
import LoginPage from '../login-page/LoginPage';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/history'>
        <History />
      </Route>
      <Route path='/favourite'>
        <Favourite />
      </Route>
      <Route path='/favourite'>
        <Favourite />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/logout'>
        <div>Logout</div>
      </Route>
    </Switch>
  );
};

export default Main;
