import {NavLink} from "react-router-dom";
import logo from "../../assets/kikikan2 1.png"
import city from "../../assets/city1.png";
import start1 from "../../assets/start.jsx.png";
import './start.css'

export const Start = () => {
  return (
    <div className="hogehoge">
      <img src={logo} className="logo"/>
      {/* <img src={city} className="city"/> */}
      {/* <img src={start} className="start"/> */}
      <NavLink to="/explain">説明</NavLink>
    </div>
  );
};