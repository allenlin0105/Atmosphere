import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import IntroItem from "./IntroItem";
// import images
import campfire from "../assets/img/campfire.jpg";
import ocean from "../assets/img/ocean.jpg";
import rain from "../assets/img/rain.jpg";
import piano from "../assets/img/piano.jpg";
import jazz from "../assets/img/jazz.jpg";

const Content = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={campfire}
                title={"營火"}
                enTag={"campfire"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={rain}
                title={"雨滴"}
                enTag={"rain"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={ocean}
                title={"海浪"}
                enTag={"ocean"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={piano}
                title={"鋼琴"}
                enTag={"piano"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={jazz}
                title={"Jazz"}
                enTag={"jazz"}
            />
        </Carousel.Item>
      </Carousel>
    );
}

export default Content;