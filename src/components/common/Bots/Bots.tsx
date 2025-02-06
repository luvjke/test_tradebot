import React from 'react';
import { userData } from 'src/common/utils';

import styles from './Bots.module.scss';
export const Bots = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {userData.bots.map((bot, index) => (
          <li key={index} className={styles.bot}>
            <img src={bot.icon} alt="bot" className={styles.img} />
            <p className={styles.name}>{bot.name}</p>
            <p className={styles.cost}>{bot.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
