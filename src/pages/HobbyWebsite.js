import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week2/Images";

const carouselImages = Images;

const HobbyWebsite = () => {
    return (
        <Fragment>
            Hobby Website
            <Carousel images={carouselImages} />
        </Fragment>
    );
};

export default HobbyWebsite;
