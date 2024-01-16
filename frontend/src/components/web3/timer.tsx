'use client'

import React, { FC } from 'react';
import { useTimer } from 'react-timer-hook';

export const MyTimer: FC = () => {
  // Set your desired date and time for the countdown to end
  const expiryTime = new Date('2024-01-31T23:59:59'); // Example: January 31, 2024, 23:59:59

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => console.warn('onExpire called')
  });

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        {days}:{hours}:{minutes}:{seconds}
      </div>
      
    </div>
  );
}

export default MyTimer;
