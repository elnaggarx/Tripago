import React from "react";
import "./DestinationStyles.css";

function Destination(props){
    return <div className={props.cName}>
         <div className="destinations-main-text">
            <h1>{props.mainTextHOne}</h1>
            <p>{props.mainTextP}</p>
         </div>
        <div className={props.flexCName}>
            <div className="destination-text">
                <h1>{props.city}</h1>
                <p>{props.cityDescritpion}</p>

            </div>
            <div className="destination-image">
            <img src={props.image1}></img>
            <img src={props.image2} className="right-side-image"></img>
            </div>
        </div>
    </div>;
}
export default Destination;