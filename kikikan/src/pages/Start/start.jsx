import { NavLink } from "react-router-dom";
import logo from "../../assets/kikikan2 1.png";
// import city from "../../assets/city1.png";
import start1 from "../../assets/starthaikei.png";
import toguro from "../../assets/image 2.png";
import homeless from "../../assets/Group 5.png";
// import George from "../../assets/face.png";
import { StartButton } from "../../components/StartButton/startButton";
import { ExplainButton } from "../../components/ExplainButton/ExplainButton";
import "./start.css";

export const Start = () => {
  return (
    <body className="start_page_context">
      <img src={logo} alt="" className="start_page_logo" />
      <div className="start_page_under">
        <img src={toguro} alt="" className="toguro" />
        <div className="start_button_context">
          <div className="start_page_start_button">
            <StartButton name="GAME START" />
          </div>
          <div className="start_page_explain_button">
            <ExplainButton name="遊び方" />
          </div>
        </div>
        <img src={homeless} alt="" className="start_page_homeless" />
        {/* <img src={George} alt="" className="George" /> */}
      </div>
    </body>
  );
};