import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CircularTimeBar from "./CircularTimeBar";

const PlayScreen = ({location}) => {
    const { 
        title = "營火",
        enTag = "campfire",
        time = 30
    } = location.state || {}

    return (
        <div>
            <Header />
            <CircularTimeBar 
                title={title}
                enTag={enTag}
                time={time}
            />
            <Footer />
        </div>
    );
}

export default PlayScreen;
