import React, { Fragment } from "react";
import PageData from "../data/HobbyWebsite";
import PageSections from "../components/PageSections/PageSections";

const HobbyWebsite = () => {
    return (
        <Fragment>
            <h1>Hobby Website</h1>
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

export default HobbyWebsite;
