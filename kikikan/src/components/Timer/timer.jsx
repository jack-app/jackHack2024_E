import React ,{useState} from "react";
import { useTimer } from "react-timer-hook";
import "./timer.css";

export function MyTimer({onTimeUp ,addTenSeconds}) {
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date().getTime() + 60000); // 1時間後に設定

  const { seconds, minutes ,restart} = useTimer({
    expiryTimestamp,
    onExpire: onTimeUp, 
  });

  const handleAddTime = () => {
    setExpiryTimestamp(expiryTimestamp + 10000); // 10秒追加
    restart(expiryTimestamp + 10000);
    console.log(seconds) 
    addTenSeconds(); // 親コンポーネントの関数を呼び出す
  };
  return (
    <div className="timer_context">
      <div className="timer_text">TIMER</div>
      <div className="timer_number">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={handleAddTime}>+10 Seconds</button>
    </div>
  );
}

