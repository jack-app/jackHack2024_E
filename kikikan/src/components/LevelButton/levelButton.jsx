import { useLocation } from "react-router-dom";

import React from "react";
import "./levelButton.css";

export const LevelButton = ({ name }) => {
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
    if (name === "初級") {
      window.location.href = "/easygame";
    } else if (name === "中級") {
      window.location.href = "/normalgame";
    } else if (name === "上級") {
      window.location.href = "/hardgame";
    }
  };
  return (
    <div className="level_button_wrapper">
      <button className="level_button_text" onClick={handleClick} >{name}</button>
    </div>
  );
};
