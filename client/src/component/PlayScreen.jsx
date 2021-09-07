import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CircularTimeBar from "./CircularTimeBar";

const PlayScreen = ({location}) => {
    const { 
        title = "無標題",
        time = 30
    } = location.state || {}

    return (
        <div>
            <Header />
            <CircularTimeBar 
                title={title}
                time={time}
            />
            <Footer />
        </div>
    );
}

export default PlayScreen;
