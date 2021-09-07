import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'

const CircularTimeBar = (props) => {
    const wholeTime = Number(props.time) * 60;
    const [remainingTime, setRemainingTime] = useState(wholeTime);
    const [start, setStart] = useState(true);
    const leftAnimationStyle = {
        animation: String(wholeTime / 2) + 's left linear both',
    }
    const rightAnimationStyle = {
        animation: String(wholeTime / 2) + 's right linear both',
        animationPlayState: 'paused'
    }
    const progressAnimation = document.querySelectorAll(".progress-bar")

    /* Animation control function */
    const changeAnimationState = (startState) => {
        const playState = (startState)? 'running' : 'paused';
        const progressBarIndex = (remainingTime < wholeTime / 2)? 1 : 0;

        progressAnimation[progressBarIndex].style.animationPlayState = playState;
    }

    const timeStart = () => {
        setStart(true);
        changeAnimationState(true);
    }

    const timeStop = () => {
        setStart(false);
        changeAnimationState(false);
    }

    useEffect(() => {
        if (!start || remainingTime <= 0) {
            return;
        }
        if (remainingTime === wholeTime / 2) {
            progressAnimation[1].style.animationPlayState = 'running';
        }
        let id = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
        return () => clearInterval(id);
    }, [start, remainingTime, wholeTime, progressAnimation]);

    return (
        <div className="circular">
            <div className="inner" />     
            <div className="remaining-time">{`${('0' + (Math.floor(remainingTime / 60))).slice(-2)}:${('0' + (remainingTime % 60)).slice(-2)}`}</div>      
            <div className="progress-bar-info-button">
                <div className="selected-title">{props.title}</div>
                <Button onClick={timeStop} variant="outline-light pause-btn" size="sm">暫停</Button>
                <Button onClick={timeStart} variant="outline-light continue-btn" size="sm">繼續</Button>
            </div>
            <div className="circle">
                <div className="bar left">
                    <div style={leftAnimationStyle} className="progress-bar" />
                </div>
                <div className="bar right">
                    <div style={rightAnimationStyle} className="progress-bar" />
                </div>
            </div>
        </div>
    )
}

export default CircularTimeBar;