import React from 'react';

import { Button } from '../Button';
import { ToggleButtonsProps } from './ToggleButtons.props';
import styles from './ToggleButtons.module.scss';

export const ToggleButtons = ({ timeFrames, onTimeFrameChange }: ToggleButtonsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Total Range:</h2>
      <div className={styles.buttons}>
        {timeFrames.map((timeFrame, index) => (
          <Button
            key={index}
            version={'custom'}
            label={timeFrame.label}
            onClick={() => onTimeFrameChange(timeFrame.value)}
            lversion={'regular'}
          />
        ))}
      </div>
    </div>
  );
};
