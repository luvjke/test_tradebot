import React from 'react';
import { XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';

import styles from './Chart.module.scss';

const data = [
  { name: '24h', value1: 210.1, value2: -6.5, value3: 3.33, value4: 3.15, value5: -10.8 },
  { name: '7d', value1: 81.3, value2: -4.3, value3: -17.6, value4: 0.065, value5: 5.5 },
  { name: '30d', value1: 90.7, value2: -0.17, value3: -2.5, value4: 4.1, value5: 11.4 },
  { name: 'All time', value1: 98.67, value2: 10.1, value3: 4.99, value4: 126.85, value5: 71.0 },
];

export const Chart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <AreaChart width={350} height={150} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="value1" stroke="#ff6400" fill="#ff6400" />
          <Area type="monotone" dataKey="value2" stroke="#ff1704" fill="#ff1704" />
          <Area type="monotone" dataKey="value3" stroke="#54964a" fill="#54964a" />
          <Area type="monotone" dataKey="value4" stroke="0095c7" fill="#0095c7" />
        </AreaChart>
      </div>
    </div>
  );
};
