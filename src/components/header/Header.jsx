import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userAccountSlice';

export default function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  let currentUser = useSelector((state) => state.users.currentUser);
  console.log('currentUser', currentUser);

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
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
        activeClassName={styles.selected}
      >
        Любимые фильмы
      </NavLink>

      <NavLink
        to='/history'
        className={classnames(styles.item, { [styles.hidden]: !isLoggedIn })}
        activeClassName={styles.selected}
      >
        История
      </NavLink>
      <NavLink
        to='/sign-up'
        className={classnames(styles.item, { [styles.hidden]: isLoggedIn })}
        activeClassName={styles.selected}
      >
        Регистрация
      </NavLink>
      <NavLink
        to='/login'
        className={classnames(styles.item, { [styles.hidden]: isLoggedIn })}
        activeClassName={styles.selected}
      >
        Вход
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
        Выход
      </NavLink>
    </header>
  );
}
