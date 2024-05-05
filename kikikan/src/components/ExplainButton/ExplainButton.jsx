import { useLocation } from "react-router-dom";

import React from "react";
import "./ExplainButton.css";

export const ExplainButton = ({ name }) => {
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
    if (name === "初級") {
      window.location.href = "/easygame";
    }
  };
  return (
    <div className="start_button_explain_wrapper">
      <div className="start_button_explain_text" onClick={handleClick}>
        {name}
      </div>
    </div>
  );
};