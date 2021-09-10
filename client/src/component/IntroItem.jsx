import React from "react";
import PopupScreen from "./PopupScreen";

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
                <PopupScreen
                    title={props.title}
                    enTag={props.enTag}
                />
                <div className="play-text">
                    press the button
                </div>
            </div>  
        </div>
    );
}

export default IntroItem;