import React from "react";
import "../Styles/Home.scss";
import Charts, { DateTime } from "./Charts";
function Home(props) {
  return (
    <div className="home-main-cont">
      <div className="home-cont">
        <DateTime />
        <Charts/>
      </div>
    </div>
  );
}

export default Home;
