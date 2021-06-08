import React, { Fragment } from "react";
import PageData from "../data/BasicWebPage";
import PageSections from "../components/PageSections/PageSections";

const BasicWebPage = () => {
    return (
        <Fragment>
            <h1>Basic Web Page</h1>
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

export default BasicWebPage;
