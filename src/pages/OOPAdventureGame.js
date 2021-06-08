import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week5/Images";

const carouselImages = Images;

const OOPAdventureGame = () => {
    return (
        <Fragment>
            OOP Adventure Game
            <Carousel images={carouselImages} />
        </Fragment>
    );
};

export default OOPAdventureGame;
