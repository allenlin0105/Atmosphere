import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PlayingScreen = ({location}) => {
    const { 
        title = "no title",
        time = 30
    } = location.state || {}

    return (
        <div>
            <Header />
            <div>
                title: {title}
                time: {time}
            </div>
            <Footer />
        </div>
    );
}

export default PlayingScreen;
