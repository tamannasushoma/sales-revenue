import React from "react";
import "../styles/css/card.css";

const Card = (props) => {
  return (
    <>
      <div>
        <div className="card">
          <img
            className="card-img-top img-fluid pic"
            src={props.imgUrl}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.value} BDT</p>
            <p className="card-text">click to see details</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
