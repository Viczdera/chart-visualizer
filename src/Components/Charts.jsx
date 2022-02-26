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
  return (
    <div>
      <>
        {Users.slice(0, 20).map((i,key) => (
          <h1 key={key}>{i.name}</h1>
        ))}
      </>
    </div>
  );
}

export default Charts;
