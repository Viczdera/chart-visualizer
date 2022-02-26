import React from "react";
import "../Styles/Nav.scss"
import ProgressBar from "./ProgressBar";
import ChartImg from "../Assets/icons/chart0.svg"
const Nav = () => {
  return (
    <div className="nav-main-cont">
      <ProgressBar />
      <div className="nav">
          <img src={ChartImg} alt="charticon" width="30px"/>
      </div>
    </div>
  );
};

export default Nav;
