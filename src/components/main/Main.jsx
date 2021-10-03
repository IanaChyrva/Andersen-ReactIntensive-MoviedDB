import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favourite from '../favourite/Favourite';
import History from '../history/History';
import Home from '../home/Home';
import LoginPage from '../login-page/LoginPage';
import RegistrationForm from '../registration-form/RegistrationForm';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.mainWindow}>
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
        <Route path='/sign-up'>
          <RegistrationForm />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/logout'>
          <div>Logout</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
