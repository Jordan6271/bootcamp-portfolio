import React, { Fragment, useState } from "react";
import Carousel from "../Carousel/Carousel";

const Intro = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const changeSize = () => {
        setScreenWidth(window.innerWidth);
    };

    window.addEventListener(`resize`, changeSize);

    return (
        <Fragment>
            <h2>Project Overview</h2>
            {screenWidth > 1080 ? (
                <Carousel
                    images={props.images}
                    fullStack={props.fullStack}
                    screenWidth={screenWidth}
                />
            ) : (
                <Fragment />
            )}
            <p>{props.text}</p>
        </Fragment>
    );
};

export default Intro;
