import React, { useEffect, useState } from "react";
import "../Styles/Charts.scss";
import axios from "axios";
import styled from "styled-components";

import Calender from "../Assets/icons/calender.svg";
import Loading from "./Loading";

export const DateTime = () => {
  var curentDate = new Date();
  //  var time= curentDate.getHours() + ":" + curentDate.getMinutes() + ":" + curentDate.getSeconds();
  var date =
    curentDate.getFullYear() +
    "-" +
    (curentDate.getMonth() + 1) +
    "-" +
    curentDate.getDate();
  return (
    <div className="date">
      <img src={Calender} alt="dateicon" width="20px" />
      <span>{date}</span>
    </div>
  );
};

function Charts(props) {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  ///random array
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100 + 1));
  }

  //random number
  function getRandom() {
    return Math.floor(Math.random() * 100);
  }

  //adding property view containing random number to array
  Users.forEach((e) => {
    e.view = getRandom();
  });
  //getting first twenty data
  function NewUsers() {
    return Users.slice(0, 20).map((u) => {
      return u;
    });
  }

  const ColorData = [
    { id: 1, colors: "#ff9066ff" },
    { id: 2, colors: "#315fecff" },
    { id: 3, colors: "#ffca41ff" },
    { id: 4, colors: "#42cc7dff" },
    { id: 5, colors: "#8674feff" },
    { id: 6, colors: "#fe7690ff" },
    { id: 7, colors: "#ff9066ff" },
    { id: 8, colors: "#315fecff" },
    { id: 9, colors: "#ffca41ff" },
    { id: 10, colors: "#42cc7dff" },
    { id: 11, colors: "#fe7690ff" },
    { id: 12, colors: "#ff9066ff" },
    { id: 13, colors: "#315fecff" },
    { id: 14, colors: "#ffca41ff" },
    { id: 15, colors: "#42cc7dff" },
    { id: 16, colors: "#8674feff" },
    { id: 17, colors: "#ff9066ff" },
    { id: 18, colors: "#315fecff" },
    { id: 19, colors: "#ffca41ff" },
    { id: 20, colors: "#42cc7dff" },
    // colors:["#8674feff "],
  ];

  //Adding the colors to the new data

  const NewUserWithColors = NewUsers().map((u) => ({
    ...u,
    color: ColorData.find((x) => x.id === u.id).colors,
  }));

  console.log(NewUserWithColors);

  const MakeBar = styled.div`
    height: ${(props) => props.height};
    width: 30px;
    margin: 1px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${(props) => props.color};
  `;

  return (
    <div className="chartcont">
      <div className="flex-card-cont">
        <div className="card users-card">
          <span>Users</span>
          {loading ? <Loading /> : <h1>{NewUsers().length}</h1>}
        </div>

        <div className="card bar-chart">
          <div style={{ display: "flex", alignItems: "baseline" }}>
            {NewUserWithColors.map((i,key) => (
              <MakeBar key={key} color={`${i.color}`} height={`${i.view * 2}px`} />
            ))}
          </div>
        </div>
      </div>

      <div className="card pie-chart"></div>
    </div>
  );
}

export default Charts;
