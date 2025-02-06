import React from 'react';

import styles from './Chart.module.scss';

const dates = ['22.04', '23.04', '24.04', '25.04', '26.04'];

export const Chart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.procent}>36.5%</div>
      <div className={styles.dates}>
        {dates.map((date, index) => (
          <span key={index} className={styles.date}>
            {date}
          </span>
        ))}
      </div>
    </div>
  );
};
