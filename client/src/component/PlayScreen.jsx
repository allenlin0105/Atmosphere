import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CircularTimeBar from "./CircularTimeBar";
import useExitPrompt from "./useExitPrompt";

const PlayScreen = ({ location }) => {
    const { 
        title = "營火",
        enTag = "campfire",
        time = 1
    } = location.state || {}

    const [showExitPrompt, setShowExitPrompt] = useExitPrompt(false);
    const enableExitPrompt = (e) => {
        if (!showExitPrompt) {
            e.preventDefault();
            setShowExitPrompt(!showExitPrompt);
        }
    }
    useEffect(() => {
        return () => setShowExitPrompt(false);
    }, []);

    return (
        <div>
            <Header />
            <CircularTimeBar 
                title={title}
                enTag={enTag}
                time={time}
                enableExitPrompt={enableExitPrompt}
            />
            <Footer positionFixed={true}/>
        </div>
    );
}

export default PlayScreen;
