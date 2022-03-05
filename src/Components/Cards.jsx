import React from "react";
import "../Styles/Card.scss";
import binoculars from "../Assets/icons/binoculars.svg"

const Cards = ({ data }) => {
  return (
    <div className="card-cont">
      {data.map((card) => (
        <div className="card data-card">
            <span>id</span>
            <h3>{card.id}</h3>
            <span><img src={binoculars} alt="views" width="30px"/></span>
            <h3>{card.view}</h3>
            <span>name</span>
            <h3>{card.name}</h3>
            <span>Email</span>
            <h3>{card.name}</h3>
            <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
 