import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
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
        to='/login'
        className={styles.item}
        activeClassName={styles.selected}
      >
        Login
      </NavLink>
    </header>
  );
}
