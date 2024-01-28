'use client'

import React, { FC } from 'react';
import { useTimer } from 'react-timer-hook';
import { Card, CardContent } from '@/components/ui/card'

export const MyTimer: FC = () => {
  // Set your desired date and time for the countdown to end
  const expiryTime = new Date('2024-01-28T12:00:00');

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
    <>
    <div className="max-w-[22rem] grow flex-col gap-4  ">
  <br />
  <Card>
    <CardContent className="shadow-2xl  pb-3  flex-auto ">
    <h2 className="mt-4 text-center font-mono text-gray-400">Drag me daddy</h2>
    
      <h2 className="text-center font-mono text-gray-400">im coming... <br />12PM UTC 28th Jan</h2>
    </CardContent>
  </Card>
</div>
    </>
  );
}

export default MyTimer;
