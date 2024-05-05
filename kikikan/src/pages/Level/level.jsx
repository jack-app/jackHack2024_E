import React, { useState } from "react";
import { LevelButton } from "../../components/LevelButton/levelButton";
import face from "../../assets/face.png";
import "./../../App.css";
import "./level.css";

export const Level = () => {
  const [name, setName] = useState("名無し");
  localStorage.setItem("name", name);
  localStorage.setItem("level", "初級");

  return (
    <div className="wrapper">
      <div className="name_context">
        <div className="name_text">ニックネーム</div>
        <input
          type="text"
          placeholder="名無し"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="context">
        <div className="level_context">
          <div className="level">
            <LevelButton name="初級" />
            <LevelButton name="中級" />
            <LevelButton name="上級" />
          </div>
          <div className="message_context">
            <div className="message">
              <p>初級をクリアすると次のステージが開放されるよ！</p>
            </div>
            <div>
              <img className="face" src={face} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
