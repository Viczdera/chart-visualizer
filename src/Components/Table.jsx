import React from "react";
import "../Styles/Table.scss";
const Table = ({ data }) => {
  return (
    <div className="table-cont">
      <div class="outer">
        <div class="inner">
          <table>
            <tr>
              <th>Header A</th>
              <td>col 1 - A</td>
              <td>col 2 - A (WITH LONGER CONTENT)</td>
              <td>col 3 - A</td>
              <td>col 4 - A</td>
              <td>col 5 - A</td>
            </tr>
           {data.map((d)=>(
              <tr>
              <th>{d.id}</th>
              <td>{d.view}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.body}</td>
            </tr>
           ))}
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
