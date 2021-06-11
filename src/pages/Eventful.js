import React, { Fragment } from "react";
import PageData from "../data/Eventful";
import PageSections from "../components/PageSections/PageSections";

const Eventful = () => {
    return (
        <Fragment>
            <h1>Eventful</h1>
            <PageSections
                carouselImages={PageData.images}
                introText={PageData.intro}
                difficultyText={PageData.difficulty}
                progressionText={PageData.progression}
                links={PageData.links}
            />
        </Fragment>
    );
};

export default Eventful;
