import React from "react";
import PlayPopup from "./PlayPopup";

const IntroItem = (props) => {
    return (
        <div className="d-block w-100 h-100 container">
            <img
                src={props.image}
                alt="First slide"
                className="w-100 h-100 round-corner"
            />
            <div className="info-background info-color round-corner absolute-position" />
            <div className="info-content absolute-position">
                <h2>{props.title}</h2>
                <PlayPopup 
                    title={props.title}
                />
                <br />
                <div className="play-text">
                    or press space
                </div>
            </div>  
        </div>
    );
}

export default IntroItem;