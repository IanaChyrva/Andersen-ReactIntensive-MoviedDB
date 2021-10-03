import React from 'react';
import styles from './ProfielMenu.module.css';

const ProfileMenu = () => {
  return (
    <div className={styles.profileMenu}>
      <div className={styles.profileSubMenu}>SignUp</div>
      <div className={styles.profileSubMenu}>Login</div>
      <div className={styles.profileSubMenu}>User</div>
      <div className={styles.profileSubMenu}>Logout</div>
    </div>
  );
};

export default ProfileMenu;
