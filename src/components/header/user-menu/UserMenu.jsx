import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.activeLink}`}>Favourite</li>
        <li className={styles.menuItem}>History</li>
      </ul>
    </div>
  );
};

export default UserMenu;
