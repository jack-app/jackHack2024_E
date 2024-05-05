import React from "react";
import { useTimer } from "react-timer-hook";
import "./timer.css";

export function MyTimer({ expiryTimestamp, onTimeUp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: onTimeUp, 
  });

  return (
    <div className="timer_context">
      <div className="timer_text">TIMER</div>
      <div className="timer_number">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

