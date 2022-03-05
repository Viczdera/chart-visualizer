import React from "react";
import "../Styles/Table.scss";
const Table = ({ data }) => {
  return (
    <div className="table-cont">
      <div class="outer">
        <div class="inner">
          <table>
            <tr>
              <th>id</th>
              <td>col 1 - A</td>
              <td>col 2 - A (WITH LONGER CONTENT)</td>
             
            </tr>
           {data.map((d)=>(
              <tr>
              <th>{d.id}</th>
              <td>{d.view}</td>
              <td>{d.name}</td>
             
            </tr>
           ))}
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
