import React from "react";
import "./HeroStyle.css";
function Hero(props){
    return <div className="hero">
    <img src={props.image} className={props.cName}/> 
    <div className="hero-text-component">
        <h1 className={props.textCName}>{props.mainText}</h1>
        <p>{props.subText}</p>
        <button className={props.buttonCName}> {props.buttonText} </button>
    </div>
    </div>; 

}
export default Hero;