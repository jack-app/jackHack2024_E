import {NavLink} from "react-router-dom";

export const Start = () => {
  return (
    <div>
      <h1>Start</h1>
      <NavLink to="/level">レベルだよ</NavLink>
      <NavLink to="/explain">説明</NavLink>
    </div>
  );
};