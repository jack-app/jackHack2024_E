import { useLocation } from "react-router-dom";
import face from "../../assets/face.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";
import stage01 from "../../assets/stage01.jpg";
import "./easyGame.css";
import { MyTimer } from "../../components/Timer/timer";

export const EasyGame = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10秒のタイマー

  // タイマー終了時に呼ばれる関数
  const handleTimeUp = () => {
    window.location.href = "/over";
  };

  return (
    <div className="easy_game_wrapper">
      <div className="logo"></div>
      <div className="game_context">
        <div className="game_detail">
          <div className="game_message">
            <img className="game_page_face" src={face} alt="" />
            <div className="text_context">
              <div className="game__message_text">危機感もてよ！</div>
              <div className="game_page_level_text">初級</div>
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
        <div className="game_screen">
          <img className="screen" src={stage01} alt="" />
        </div>
      </div>
    </div>
  );
};
