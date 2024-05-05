import { NavLink } from "react-router-dom";
import logo from "../../assets/kikikan2 1.png";
import city from "../../assets/city1.png";
import start1 from "../../assets/start.jsx.png";
import toguro from "../../assets/image 2.png";
import homeless from "../../assets/image 3.png";
import George from "../../assets/face.png";
import { StartButton } from "../../components/StartButton/startButton";
import { ExplainButton } from "../../components/ExplainButton/ExplainButton";
import "./start.css";

export const Start = () => {
  return (
    <div className="start-page-context">
      <img src={logo} alt="" className="logo" />
      {/* <img src={city} className="city"/> */}
      {/* <img src={start} className="start"/> */}
      <img src={toguro} alt="" className="toguro" />
      <div className="start_homeless">
        {" "}
        <img src={homeless} alt="" className="start_page_homeless" />
      </div>
      <div className="start_page_start_button">
        <StartButton name="GAME START" />
      </div>
      <div className="start_page_explain_button">
        <ExplainButton name="遊び方" />
      </div>
      <img src={George} alt="" className="George" />

      <NavLink to="/explain">説明</NavLink>
    </div>
  );
};
