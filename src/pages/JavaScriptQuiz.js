import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week4/Images";

const carouselImages = Images;

const JavaScriptQuiz = () => {
    return (
        <Fragment>
            JavaScript Quiz
            <Carousel images={carouselImages} />
        </Fragment>
    );
};

export default JavaScriptQuiz;
