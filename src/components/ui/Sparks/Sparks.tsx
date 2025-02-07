import React from 'react';
import classNames from 'classnames';

import firstSpark from '../../../assets/layers/Bots/arrows/1.png';
import secondSpark from '../../../assets/layers/Bots/arrows/2.png';
import therdSpark from '../../../assets/layers/Bots/arrows/3.png';
import fourthSpark from '../../../assets/layers/Bots/arrows/4.png';
import styles from './Sparks.module.scss';
export const Sparks = () => {
  return (
    <div className={styles.overlay_images}>
      <div className={styles.second_overlay}>
        <img
          src={secondSpark}
          alt="Overlay 2"
          className={classNames(styles.overlay_image, styles.second_spark)}
        />
        <img
          src={firstSpark}
          alt="Overlay 1"
          className={classNames(styles.overlay_image, styles.first_spark)}
        />
      </div>

      <div className={styles.second_overlay}>
        <img
          src={fourthSpark}
          alt="Overlay 4"
          className={classNames(styles.overlay_image, styles.fourth_spark)}
        />
        <img
          src={therdSpark}
          alt="Overlay 3"
          className={classNames(styles.overlay_image, styles.therd_spark)}
        />
      </div>
    </div>
  );
};
