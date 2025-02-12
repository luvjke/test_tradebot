import React from 'react';
import { footerData } from 'src/common/utils';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.container}>
        <ul className={styles.list}>
          {footerData.map((item, index) => (
            <Link to={'/'} key={index}>
              <li className={styles.item}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
                <span className={styles.title}>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
