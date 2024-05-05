import { useLocation } from "react-router-dom";

import React from "react";
import "./startButton.css";

export const StartButton = ({ name }) => {
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
      window.location.href = "/level";
  };
  return (
    <div className="start_button_wrapper">
      <button className="start_button_text" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};
