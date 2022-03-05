import React from "react";
import "../Styles/Card.scss";
import binoculars from "../Assets/icons/binoculars.svg";

const Cards = ({ data }) => {
  return (
    <div className="card-cont">
      {data.map((card) => (
        <div className="card data-card">
          <h3>id</h3>
          <h5>{card.id}</h5>
          <span>
            
            <h3 >Views</h3>
            <img src={binoculars} alt="views" width="30px" />
          </span>
          <h5>{card.view}</h5>
          <h3>Name</h3>
          <h5>{card.name}</h5>
          <h3>Email</h3>
          <h5>{card.name}</h5>
          <h3>Body</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
