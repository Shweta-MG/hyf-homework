import './Timer.css';

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

    return <div className='timer'>
        You have used
        <span className='timerSeconds'> {seconds} seconds </span>
        on this ToDo App
    </div>;
};

export default Timer;

