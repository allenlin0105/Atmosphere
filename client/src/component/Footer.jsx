import React from "react";

const Footer = (props) => {
    const positionStyle = {
        position: props.positionFixed ? "absolute" : "relative",
    }
    return (
        <footer style={positionStyle}>
            Copyright © 2021 Allen Lin. All rights reserved.
        </footer>
    );
};

export default Footer;