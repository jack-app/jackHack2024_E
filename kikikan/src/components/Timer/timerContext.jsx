// TimerContext.js
import React, { createContext, useState } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [expiryTimestamp, setExpiryTimestamp] = useState(null);

  const addTime = (secondsToAdd) => {
    setExpiryTimestamp(expiryTimestamp + secondsToAdd * 1000);
  };

  return (
    <TimerContext.Provider value={{ expiryTimestamp, addTime }}>
      {children}
    </TimerContext.Provider>
  );
};
export default TimerContext
export {TimerContext,TimerProvider};