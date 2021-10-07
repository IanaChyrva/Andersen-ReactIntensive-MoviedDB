import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userAccountSlice';

export default function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  let currentUser = useSelector((state) => state.users.currentUser) || null;

  const handleLogout = () => {
    console.log('to remove');
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      {console.log('isLoggedIn', isLoggedIn)}
      <div className={styles.logoContainer}>
        <NavLink
          to='/'
          className={styles.logo}
          activeClassName={styles.selected}
        >
          PPCorn
        </NavLink>
      </div>
      <NavLink
        to='/favourite'
        // className={`${styles.item} ${!isLoggedIn ? styles.hidden : ''}`}
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
        activeClassName={styles.selected}
      >
        Favourite
      </NavLink>

      <NavLink
        to='/history'
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
        activeClassName={styles.selected}
      >
        History
      </NavLink>
      <NavLink
        to='/sign-up'
        className={classnames(styles.item, { [styles.hidden]: isLoggedIn })}
        activeClassName={styles.selected}
      >
        Sign-Up
      </NavLink>
      <NavLink
        to='/login'
        className={classnames(styles.item, { [styles.hidden]: isLoggedIn })}
        activeClassName={styles.selected}
      >
        Login
      </NavLink>
      <div
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
      >
        {currentUser ? `${currentUser.name} ${currentUser.lastname}` : ''}
      </div>
      <NavLink
        to='/login'
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
        activeClassName={styles.selected}
        onClick={handleLogout}
      >
        Logout
      </NavLink>
    </header>
  );
}
