import React, { Fragment } from "react";
import Intro from "./Intro";
import Difficulty from "./Difficulty";
import Progression from "./Progression";
import Links from "./Links";

const PageSections = (props) => {
    return (
        <Fragment>
            <Intro images={props.carouselImages} text={props.introText} />
            <Difficulty text={props.difficultyText} />
            <Progression text={props.progressionText} />
            <Links links={props.links} />
        </Fragment>
    );
};

export default PageSections;
