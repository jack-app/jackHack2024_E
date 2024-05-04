import { NavLink } from "react-router-dom";
import logo from "../../assets/kikikan_logo.png";
import congratulation from "../../assets/congratulations.png";
import face from "../../assets/face.png";
import "./gameClear.css";
import { LevelButton } from "../../components/LevelButton/levelButton";

export const GameClear = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="clear-container">
      <img src={logo} className="logo" />
      <div className="container-title">
        <img src={congratulation} className="congratulations" />
      </div>
      <div className="content-wrapper">
        <div className="ranking-wrapper">
          <div className="ranking-table-title">- 初級 RANKING -</div>
          <div className="ranking-table-content">1位 ヌヌーピー 00:40</div>
          <div className="ranking-table-content">2位 ヌヌーピー 00:41</div>
          <div className="ranking-table-content">3位 ヌヌーピー 00:42</div>
          <div className="ranking-table-content">4位 ヌヌーピー 00:43</div>
          <div className="ranking-table-content">5位 ヌヌーピー 00:44</div>
          <div className="ranking-table-content">...</div>
          <div className="ranking-table-content-me">44位 マロン 44:44</div>
        </div>
        <div className="button-wrapper">
          <img src={face} className="clear-face" />
          <div className="clear-massage">良いKIKIKANを持っているじゃないか</div>
        </div>
      </div>
      <div className="title-button-wrapper">
        <button className="title-button" onClick={handleClick}>
          タイトルへ戻る
        </button>
      </div>
    </div>
  );
};
