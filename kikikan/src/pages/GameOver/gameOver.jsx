import {NavLink} from "react-router-dom";
import "./gameOver.css";
import { TitleButton } from "../../components/TitleButton/titleButton";
import GameOverLogo from "../../assets/GAMEOVER.png";
import jojiface from "../../assets/face.png";

export const GameOver = () => {
  return (
    <div>
      <h1>GameOver</h1>
      <div className="gameover-container">
        <img
          src={GameOverLogo}
          className="GameOverLogo"
          alt="GameOverLogo"
        />
      </div>
    <div className="aoribun-wrapper">
      <div className="joji-message">～ゲームオーバー理由
        厳しいって。～</div>
      <div className="jojiface">
        <img
          src={jojiface}
          className="jojiface"
          alt="jojiface"
        />
      </div>
    <div>
      
    </div>
    </div>
      <TitleButton/>
    </div>
  );
};