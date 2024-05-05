import { useLocation } from "react-router-dom";

import React from "react";
import "./ExplainButton.css";

export const ExplainButton = ({ name }) => {
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
    window.location.href = "/explain";
  };
  return (
    <div className="start_button_explain_wrapper">
      <button className="start_button_explain_text" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};