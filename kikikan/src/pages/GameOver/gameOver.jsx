import "./gameOver.css";
import { TitleButton } from "../../components/TitleButton/titleButton";
import GameOverLogo from "../../assets/GAMEOVER.png";
import jojiface from "../../assets/face.png";
import logo from "../../assets/kikikan_logo.png";

export const GameOver = () => {
  return (
    <div>
      <div className="gameover-container">
        <img src={logo} className="logo_clear" alt="kikikan" />
        <div className="gameover-title">
          <img src={GameOverLogo} alt="Game Over" className="gameover-logo" />
        </div>
        <div className="aoribun-wrapper">
          <div className="joji-message">
            <p>厳しいって！！！</p>
            <p>もっとKIKIKAN持てよ！</p>
            <p>もう一回やれよ！</p>
          </div>
          <div className="joji-face-wrapper">
            <img src={jojiface} alt="joji" className="joji-face" />
          </div>
        </div>
        <TitleButton />
      </div>
    </div>
  );
};
