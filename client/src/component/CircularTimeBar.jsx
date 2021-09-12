import React, { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';

const AudioControl = (enTag, remainingTime) => {
    let playButton = document.getElementById("audio");
    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    async function playAudio() {
        try {
            await audio.play();
            playButton.classList.add("playing");
        } catch(err) {
            playButton.classList.remove("playing");
        }
    }

    function toggle() {
        if (!playing) {
            playAudio();
        } else {
            audio.pause();
            playButton.classList.remove("playing");
        }
        
        setPlaying(prev => !prev);
    }

    useEffect(() => {
        async function importMusic() {
            const musicFile = await import(`../assets/audio/${enTag}.mp3`);
            setAudio(new Audio(musicFile.default));
        }

        if (audio === null) {
            importMusic();
        } else {
            audio.addEventListener('ended', () => setPlaying(false));
            if (remainingTime <= 0) {
                setPlaying(false);
            }
            return () => audio.removeEventListener('ended', () => setPlaying(false));
        }
    }, [audio, playing, enTag, remainingTime]);

    return [playing, toggle];
}

const AnimationControl = (remainingTime, wholeTime) => {
    const [leftAnimationState, setLeftAnimationState] = useState('paused');
    const [rightAnimationState, setRightAnimationState] = useState('paused');

    const leftAnimationStyle = {
        animation: String(wholeTime / 2) + 's left linear both',
        animationPlayState: leftAnimationState
    }
    const rightAnimationStyle = {
        animation: String(wholeTime / 2) + 's right linear both',
        animationPlayState: rightAnimationState
    }

    function toggle() {
        if (remainingTime >= wholeTime / 2) {
            setLeftAnimationState(prev => (prev === 'paused')? 'running' : 'paused');
        } else {
            setRightAnimationState(prev => (prev === 'paused')? 'running' : 'paused');
        }
    }

    useEffect(() => {
        if (remainingTime === wholeTime / 2) {
            setRightAnimationState('running');
        }
    }, [remainingTime, wholeTime]);

    return [leftAnimationStyle, rightAnimationStyle, toggle];
}

const CircularTimeBar = (props) => {
    const wholeTime = Number(props.time) * 60;
    const [remainingTime, setRemainingTime] = useState(wholeTime);
    const [playing, audioToggle] = AudioControl(props.enTag, remainingTime);
    const [leftAnimationStyle, rightAnimationStyle, animationToggle] = AnimationControl(remainingTime, wholeTime);

    useEffect(() => {
        if (!playing) {
            return;
        } else if (remainingTime <= 0) {
            toggle();
            return;
        }
        let id = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
        return () => clearInterval(id);
    }, [playing, remainingTime]);

    const toggle = (e) => {
        animationToggle();
        audioToggle(); 
        props.enableExitPrompt(e);
    }

    return (
        <div className="circular">
            <div className="inner" />     
            <div className="remaining-time">
                {`${('0' + (Math.floor(remainingTime / 60))).slice(-2)}:${('0' + (remainingTime % 60)).slice(-2)}`}
            </div>      
            <div className="progress-bar-info-button">
                <div className="selected-title">{props.title}</div>
                <Button onClick={toggle} variant="outline-light" size="sm" id="audio">{playing? "暫停" : "播放"}</Button>
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