import React, { useState, useEffect, createContext, useCallback } from "react";
import face from "../../assets/face.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";
import stage01 from "../../assets/stage01.jpg";
import benikoji from "../../assets/benikoji.png";
import "./easyGame.css";
import KanComponent from "../../components/voice/kanComponent";
import BeniComponent from "../../components/voice/beniComponent";
import VolumeMeter from "../../components/voice/volumeMeter";
import { useTimer } from "react-timer-hook";

export const TimerContext = createContext()

const getLocalStorageValue = (key, initValue) => {
  const item = localStorage.getItem(key);
  return item ? item : initValue;
};
const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, initValue)
  );

  //状態の変更とともにlocalStorageを更新する
  const setLocalStorageValue = useCallback(
    (setStateAction) => {
      const newValue =
        typeof setStateAction === "function"
          ? setStateAction(value)
          : setStateAction;
      localStorage.setItem(key, newValue);
      setValue(() => newValue);
    },
    [key, value]
  );
  return [value, setLocalStorageValue];
};

export const EasyGame = () => {

  const [bomCount, setBomCount] = useLocalStorage("bomCount", 3);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10秒のタイマー

  const [clearTime, setClearTime] = useState(0); // 経過時間を管理する状態
  // タイマー終了時に呼ばれる関数
  const handleTimeUp = () => {
    window.location.href = "/gameover";
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

     // ローカルストレージの変更を監視するイベントリスナーを設定
     const handleStorageChange = () => {
      setBomCount(localStorage.getItem('bomCount') || 3);
    };
    window.addEventListener('storage', handleStorageChange);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
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
              <div className="game_page_level_text">初級</div>
              <div className="game_page_bom_text">BOMKAN 残り {bomCount}個</div>

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
              <div className="timer_context">
                <div className="timer_text">TIMER</div>
                  <div className="timer_number">
                    <span>{minutes}</span>:<span>{seconds}</span>
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
            <KanComponent x={3} y={1} img={"lithium"} size={6} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_2">
            <BeniComponent x={3} y={1} img={"benikoji"} size={2} />
          </div>
          <div className="easy_game_screen_kan_3">
            <KanComponent x={3} y={1} img={"lithium"} size={2} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_4">
            <KanComponent x={3} y={1} img={"bomkan"} size={5} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_5">
            <KanComponent x={3} y={1} img={"lithium"} size={2} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_6">
            <KanComponent x={3} y={1} img={"lithium"} size={6} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_7">
            <KanComponent x={3} y={1} img={"bomkan"} size={4} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_8">
            <BeniComponent x={3} y={1} img={"benikoji"} size={3} />
          </div>
          <div className="easy_game_screen_kan_9">
            <KanComponent x={3} y={1} img={"bomkan"} size={7} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_10">
            <KanComponent x={3} y={1} img={"lithium"} size={7} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_11">
            <BeniComponent x={3} y={1} img={"benikoji"} size={3} />
          </div>
          <div className="easy_game_screen_kan_12">
            <KanComponent x={3} y={1} img={"lithium"} size={5} clearTime={clearTime} level={"easy"}/>
          </div>
          <div className="easy_game_screen_kan_13">
            <KanComponent x={3} y={1} img={"lithium"} size={10} clearTime={clearTime} level={"easy"}/>
          </div>
          <img className="screen" src={stage01} alt="" />
        </div>
      </div>
    </div>
    </TimerContext.Provider>
  );
};
