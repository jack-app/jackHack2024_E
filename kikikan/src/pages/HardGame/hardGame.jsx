import React, { useState, useEffect , createContext } from "react";
import face from "../../assets/face.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";
import stage03 from "../../assets/stage03.jpg";
import "./hardGame.css";
import VolumeMeter from "../../components/voice/volumeMeter";
import KanComponent3 from "../../components/voice/kanComponent3";
import BeniComponent from "../../components/voice/beniComponent";
// import { MyTimer } from "../../components/Timer/timer";
import { useTimer } from "react-timer-hook";
export const TimerContext = createContext()

export const HardGame = () => {
  const [clearTime, setClearTime] = useState(0); // 経過時間を管理する状態

  // タイマー終了時に呼ばれる関数
  const handleTimeUp = () => {
    window.location.href = "/over";
  };

  // timer component 移住
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date().getTime() + 60000); // 1時間後に設定

  const { seconds, minutes ,restart} = useTimer({
    expiryTimestamp,
    onExpire: handleTimeUp, 
  });

  const handleAddTime = () => {
    const newExpiryTimestamp = expiryTimestamp + 10000;
    setExpiryTimestamp(newExpiryTimestamp); // 10秒追加
    restart(newExpiryTimestamp);
    console.log(seconds) 
  };

  const handleDecTime = () => {
    const newExpiryTimestamp = expiryTimestamp - 10000;
    setExpiryTimestamp(newExpiryTimestamp); // 10秒引く
    restart(newExpiryTimestamp);
    console.log(seconds) 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClearTime((clearTime) => clearTime + 1);
      console.log(clearTime)
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <TimerContext.Provider value={{ handleAddTime,handleDecTime }}>
    <div className="easy_game_wrapper">
      <div className="game_context">
        <div className="game_detail">
          <div className="game_message">
            <img className="game_page_face" src={face} alt="" />
            <div className="text_context">
              <div className="game__message_text">危機感もてよ！</div>
              <div className="game_page_level_text">上級</div>
              <div className="game_page_bom_text">BOMKAN 残り 3個</div>
            </div>

            <div className="finding_kan_context">
              <div className="bomkan_context">
                <img className="game_page_bomkan_image" src={bomkan} alt="" />
                <div className="bomkan_text">BOMKAN</div>
              </div>
              <div className="richiumkan_context">
                <img
                  className="game_page_richiumkan_image"
                  src={lithium}
                  alt=""
                />
                <div className="richiumkan_text">LITHIUMMKAN</div>
              </div>
            </div>
            <div className="game_page_timer">
              {/* <MyTimer expiryTimestamp={time} onTimeUp={handleTimeUp} /> */}
              <div className="game_page_timer">
              <div className="timer_context">
                <div className="timer_text">TIMER</div>
                  <div className="timer_number">
                    <span>{minutes}</span>:<span>{seconds}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game_page_volume_menter">
          <VolumeMeter />
        </div>
        <div className="game_screen">
        <div className="easy_game_screen_kan_1">
            <KanComponent3 x={3} y={1} img={"lithium"} size={6} clearTime={clearTime}/>
          </div>
          <div className="easy_game_screen_kan_2">
            <KanComponent3 x={3} y={1} img={"lithium"} size={6} clearTime={clearTime}/>
          </div>
          <div className="easy_game_screen_kan_8">
            <BeniComponent x={3} y={1} img={"benikoji"} size={3} />
          </div>
          
          <img className="screen" src={stage03} alt="" />
        </div>
      </div>
    </div>
    </TimerContext.Provider>
  );
};