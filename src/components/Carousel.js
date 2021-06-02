import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../images/Images";

const myCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={Images[0][0]} alt="Git" />
            </Carousel.Item>
        </Carousel>
    );
};

export default myCarousel;
