import React from "react";
import "../Styles/Table.scss";
import { Loading1 } from "./Loading";
const Table = ({ data, loading }) => {
  return (
    <div className="table-cont">
      {loading ? (
        <Loading1 />
      ) : (
        <table >
          <tr>
            <th>id</th>
            <th>View</th>
            <th>Name</th>
          </tr>
          
          {data.map((d)=>(
            <tr>
            <td className="id">{d.id}</td>
            <td>{d.view}</td>
            <td>{d.name}</td>
          </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Table;
