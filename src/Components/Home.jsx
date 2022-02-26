import React from "react";
import "../Styles/Home.scss";
import Charts from "./Charts";
function Home(props) {
  const DateTime = () => {
    var curentDate= new Date();
  //  var time= curentDate.getHours() + ":" + curentDate.getMinutes() + ":" + curentDate.getSeconds();
    var date=curentDate.getFullYear()+'-'+(curentDate.getMonth()+1)+'-'+curentDate.getDate();
    return (
        <span>{date}</span>
    );
  };





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
