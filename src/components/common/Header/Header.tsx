import React from 'react';

import menuIcon from '../../../assets/layers/Title_bar/menu_icon.png';
import refreshIcon from '../../../assets/layers/Title_bar/refresh.png';
import styles from './Header.module.scss';
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.menu}>
            <img src={menuIcon} alt="menu" className={styles.menu_icon} />
          </li>
          <li className={styles.title_box}>
            <h2 className={styles.title}>Dashboard</h2>
          </li>
          <li className={styles.refresh}>
            <img src={refreshIcon} alt="refresh" className={styles.refresh_icon} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
