import React, { Fragment } from "react";
import TextBlock from "./TextBlock";
import Intro from "./Intro";
import Links from "./Links";

const PageSections = (props) => {
    return (
        <Fragment>
            <Intro
                images={props.carouselImages}
                text={props.introText}
                fullStack={props.fullStack}
            />
            <TextBlock title="Difficulties" text={props.difficultyText} />
            <TextBlock title="Progression" text={props.progressionText} />
            <Links
                fullStack={props.fullStack}
                backend={props.backend}
                links={props.links}
            />
        </Fragment>
    );
};

export default PageSections;
