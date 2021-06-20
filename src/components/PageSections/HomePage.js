import React, { Fragment } from "react";
import TextBlock from "./TextBlock";

const HomePage = (props) => {
    return (
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
    );
};

export default HomePage;
