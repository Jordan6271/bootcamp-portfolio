import React, { Fragment } from "react";
import TextBlock from "./TextBlock";
import Intro from "./Intro";
import Links from "./Links";

const PageSections = (props) => {
    return props.home ? (
        <Fragment>
            <TextBlock title={props.aboutMe.title} text={props.aboutMe.text} />
            <TextBlock
                title={props.currentWork.title}
                text={props.currentWork.text}
            />
            <TextBlock
                title={props.pastExperience.title}
                text={props.pastExperience.text}
            />
            <TextBlock
                title={props.portfolioInfo.title}
                text={props.portfolioInfo.info}
            />
            <TextBlock text={props.portfolioInfo.note} />
        </Fragment>
    ) : (
        <Fragment>
            <Intro images={props.carouselImages} text={props.introText} />
            <TextBlock title="Difficulties" text={props.difficultyText} />
            <TextBlock title="Progression" text={props.progressionText} />
            <Links links={props.links} />
        </Fragment>
    );
};

export default PageSections;
