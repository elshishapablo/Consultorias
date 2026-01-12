import { useState, useEffect, useRef } from 'react';

export const useTimer = (pricePerMinute, isActive = false) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(isActive);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const cost = ((seconds / 60) * pricePerMinute).toFixed(2);

  return {
    minutes,
    seconds: remainingSeconds,
    totalSeconds: seconds,
    cost: parseFloat(cost),
    isRunning,
    start,
    stop,
    reset,
  };
};

