import React from "react";
import "./titleButton.css";

export const TitleButton = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="title-button-wrapper">
      <button className="title-button" onClick={handleClick}>
        タイトルへ戻る
      </button>
    </div>
  );
};
