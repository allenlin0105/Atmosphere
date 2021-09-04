import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import IntroItem from "./IntroItem";
// import images
import campfire from "../assets/img/campfire.jpg";
import ocean from "../assets/img/ocean.jpg";
import rainy from "../assets/img/rainy.jpg";
import city from "../assets/img/city.jpg";
import relax from "../assets/img/relax.jpg";

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
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={rainy}
                title={"雨滴"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={ocean}
                title={"海浪"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={city}
                title={"鋼琴"}
            />
        </Carousel.Item>
        <Carousel.Item className="h-100">
            <IntroItem 
                image={relax}
                title={"Jazz"}
            />
        </Carousel.Item>
      </Carousel>
    );
}

export default Content;