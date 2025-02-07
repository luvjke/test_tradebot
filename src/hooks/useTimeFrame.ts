import { useEffect, useState } from 'react';

export const useTimeFrame = () => {
  const [timeFrame, setTimeFrame] = useState('24h');

  useEffect(() => {
    const savedTimeFrame = localStorage.getItem('timeFrame');
    if (savedTimeFrame) {
      setTimeFrame(savedTimeFrame);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timeFrame', timeFrame);
  }, [timeFrame]);

  return { timeFrame, setTimeFrame };
};
