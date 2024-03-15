import React from "react";
import "./TripCardsStyles.css";
function TripCard(props){
    return <div className="trip-card">
        <img src={props.image}></img>
        <h2 >Trip in {props.country}</h2>
        <p>{props.description}</p>
    </div>
}
export default TripCard;