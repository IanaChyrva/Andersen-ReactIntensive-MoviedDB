import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function HeaderLoggedIn() {
  return (
    <header className={styles.header}>
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
        className={styles.item}
        activeClassName={styles.selected}
      >
        Favourite
      </NavLink>
      <NavLink
        to='/history'
        className={styles.item}
        activeClassName={styles.selected}
      >
        History
      </NavLink>
      <div>Username</div>
      <NavLink
        to='/logout'
        className={styles.item}
        activeClassName={styles.selected}
      >
        Logout
      </NavLink>
    </header>
  );
}
