import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week7/Images";

const carouselImages = Images;

const CaesarCipher = () => {
    return (
        <Fragment>
            Caesar Cipher
            <Carousel images={carouselImages} />
        </Fragment>
    );
};

export default CaesarCipher;
