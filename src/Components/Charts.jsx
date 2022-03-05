import React, { useEffect, useState } from "react";
import "../Styles/Charts.scss";
import axios from "axios";
import styled from "styled-components";

import Calender from "../Assets/icons/calender.svg";
import { Loading, Loading1 } from "./Loading";
import PieChart from "./PieChart";
import ErrorSvg from "./ErrorSvg";
import Table from "./Table";
import Cards from "./Cards";

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
  const [Comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setErr(true);
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
  Comments.forEach((e) => {
    e.view = getRandom();
  });
  //getting first twenty data
  function NewComments() {
    return Comments.slice(0, 20).map((u) => {
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
    { id: 7, colors: "##b53a40" },
    { id: 8, colors: "#446873" },
    { id: 9, colors: "#db7b14" },
    { id: 10, colors: "#282230" },
    { id: 11, colors: "#63250a" },
    { id: 12, colors: "#348e9e" },
    { id: 13, colors: "#b0073d" },
    { id: 14, colors: "#0e872a" },
    { id: 15, colors: "#c2bb5b" },
    { id: 16, colors: "#2b1111" },
    { id: 17, colors: "#e67a3c" },
    { id: 18, colors: "#85807d" },
    { id: 19, colors: "#ff0808" },
    { id: 20, colors: "#1f6652" },
    // colors:["#8674feff "],
  ];

  //Adding the colors to the new data

  const NewCommentWithColors = NewComments().map((u) => ({
    ...u,
    color: ColorData.find((x) => x.id === u.id).colors,
  }));

  console.log(NewCommentWithColors);

  //Bar Chart
  const MakeBar = styled.div`
    height: ${(props) => props.height};
    margin: 0px 1px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid black;
    background-color: ${(props) => props.color};
  `;
  const Number = styled.span`
    font-size: ${(props) => props.size};
    text-align: center;
    color: ${(props) => props.color};
  `;
  const Bar = () => {
    return (
      <>
        {NewCommentWithColors.map((i, key) => (
          <div
            style={{
              width: "20%",
              alignSelf: "end",
            }}
          >
            <Number size="10px" color={`${i.color}`}>
              {i.view}
            </Number>
            <MakeBar
              key={key}
              color={`${i.color}`}
              height={`${i.view * 2}px`}
            />
            <Number size="8px" color={`#000`}>
              {i.id}
            </Number>
          </div>
        ))}
      </>
    );
  };

  //PieChart

  return (
    <div className="data-display-cont">
      <div className="chartcont">
        <div className="flex-card-cont">
          <div className="card comments-card">
            <span>Comments</span>
            {err ? (
              <ErrorSvg />
            ) : (
              <>{loading ? <Loading /> : <h1>{NewComments().length}</h1>}</>
            )}
          </div>

          <div className="card bar-chart">
            {loading ? (
              <Loading1 />
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  <Bar />
                </div>
              </>
            )}
            {loading ? "" : <span>id</span>}
          </div>
        </div>

        <div className="card pie-chart">
          {loading ? <Loading1 /> : <PieChart data={NewCommentWithColors} />}
        </div>
      </div>
      <Table data={NewComments()} /> 
      <Cards data={NewComments()} />
    </div>
  );
}

export default Charts;
