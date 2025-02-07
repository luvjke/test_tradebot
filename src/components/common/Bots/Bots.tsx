import React from 'react';
import { IBotData, userData } from 'src/common/utils';
import { ToggleButtons } from 'src/components/ui/ToggleButtons';
import { useTimeFrame } from 'src/hooks/useTimeFrame';
import { Sparks } from 'src/components/ui/Sparks';

import styles from './Bots.module.scss';
export const Bots = () => {
  const { timeFrame, setTimeFrame } = useTimeFrame();

  const timeFrames = [
    { value: '24h', label: '24 hours' },
    { value: '7d', label: '7 days' },
    { value: '30d', label: '30 days' },
    { value: 'all_time', label: 'All Time' },
  ];

  const getTimeFrameValue = (bot: IBotData) => {
    switch (timeFrame) {
      case '24h':
        return bot['24h'];
      case '7d':
        return bot['7d'];
      case '30d':
        return bot['30d'];
      case 'all_time':
        return bot['all_time'];
      default:
        return 0;
    }
  };

  const handleTimeFrameChange = (newTimeFrame: string) => {
    setTimeFrame(newTimeFrame);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {userData.bots.map((bot, index) => (
          <li key={index} className={styles.bot}>
            <img src={bot.icon} alt="bot" className={styles.img} />
            <p className={styles.name}>{bot.name}</p>
            {typeof getTimeFrameValue(bot) === 'number' && (
              <p
                className={
                  getTimeFrameValue(bot)?.toString().includes('-')
                    ? styles.loss
                    : styles.performance
                }
              >
                {getTimeFrameValue(bot)}%
              </p>
            )}
          </li>
        ))}
      </ul>
      <ToggleButtons timeFrames={timeFrames} onTimeFrameChange={handleTimeFrameChange} />
      <Sparks />
    </div>
  );
};
