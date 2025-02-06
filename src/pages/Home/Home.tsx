import React from 'react';
import { Capital } from 'src/components/common/Capital';
import { Chart } from 'src/components/common/Chart';
import { Bots } from 'src/components/common/Bots';

import styles from './Home.module.scss';
export const Home = () => {
  return (
    <div className={styles.container}>
      <Capital />
      <Chart />
      <Bots />
    </div>
  );
};
