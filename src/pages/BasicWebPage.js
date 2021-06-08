import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week1/Images";

const carouselImages = Images;

const BasicWebPage = () => {
    return (
        <Fragment>
            Basic Web Page
            <Carousel images={carouselImages} />
        </Fragment>
    );
};

export default BasicWebPage;
