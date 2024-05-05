import React, { useState, useEffect } from "react";
import face from "../../assets/face.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";
import stage01 from "../../assets/stage01.jpg";
import "./easyGame.css";
import VolumeMeter from "../../components/voice/volumeMeter";
import KanComponent from "../../components/voice/kanComponent";
import { MyTimer } from "../../components/Timer/timer";

export const EasyGame = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 30); // 10秒のタイマー
  const [clearTime, setClearTime] = useState(0); // 経過時間を管理する状態

  // タイマー終了時に呼ばれる関数
  const handleTimeUp = () => {
    window.location.href = "/gameover";
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setClearTime((clearTime) => clearTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="easy_game_wrapper">
      <div className="game_context">
        <div className="game_detail">
          <div className="game_message">
            <img className="game_page_face" src={face} alt="" />
            <div className="text_context">
              <div className="game__message_text">危機感もてよ！</div>
              <div className="game_page_level_text">初級</div>
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
              <MyTimer expiryTimestamp={time} onTimeUp={handleTimeUp} />
            </div>
          </div>
        </div>
        <div className="game_page_volume_menter">
          <VolumeMeter />
        </div>
        <div className="game_screen">
          <div className="easy_game_screen_kan_1">
            <KanComponent x={3} y={1} img={"bomkan"} size={1} clearTime={clearTime} />
          </div>
          <div className="easy_game_screen_kan_2">
            <KanComponent x={3} y={1} img={"bomkan"} size={2} clearTime={clearTime}/>
          </div>
          <img className="screen" src={stage01} alt="" />
        </div>
      </div>
    </div>
  );
};
