import React from 'react';
import { userData } from 'src/common/utils';

import HIcon from '../../../assets/layers/balance/H.png';
import styles from './Capital.module.scss';
export const Capital = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>TRADING CAPITAL</h2>
      <div className={styles.numbers_box}>
        <span className={styles.amount}>
          {userData.trading_capital} {userData.trading_capital_currency}
        </span>
        <section>
          <div className={styles.data_line}>
            <dl className={styles.data}>
              <dt className={styles.label}>BALANCE:</dt>
              <dd className={styles.value}>{userData.balance}</dd>
              <dd>
                <img src={HIcon} alt="H" className={styles.icon} />
              </dd>
            </dl>
          </div>
          <div className={styles.data_line}>
            <dl className={styles.data}>
              <dt className={styles.label}>ON HOLD:</dt>
              <dd className={styles.value}>{userData.on_hold}</dd>
              <dd>
                <img src={HIcon} alt="H" className={styles.icon} />
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </article>
  );
};
