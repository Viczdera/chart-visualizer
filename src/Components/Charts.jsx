import React, { useEffect, useState } from "react";
import "../Styles/Charts.scss";
import axios from "axios";

function Charts(props) {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        console.log(res.data);
        setUsers(res.data);
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
  console.log(randomArray);
  //random number
  var randomN = Math.floor(Math.random() * 100);
  console.log(randomN);

  function getRandom( ){
    return Math.floor(Math.random() * 100);
  }
  console.log(getRandom())

  //adding property view containing random number to array
  Users.forEach((e)=>{
    e.view=getRandom()
  
  })
  console.log(Users)

  return (
    <div>
      <>
        {Users.slice(0, 20).map((i, key) => (
          <h1 key={key}>{i.view}</h1>
        ))}
      </>
    </div>
  );
}

export default Charts;
