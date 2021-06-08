import React, { Fragment } from "react";
import Carousel from "../Carousel";

const Intro = (props) => {
    return (
        <Fragment>
            <h2>Project Overview</h2>
            <Carousel images={props.images} />
            <p>{props.text}</p>
        </Fragment>
    );
};

export default Intro;
