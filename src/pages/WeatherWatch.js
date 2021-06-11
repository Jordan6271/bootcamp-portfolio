import React, { Fragment } from "react";
import PageData from "../data/WeatherWatch";
import PageSections from "../components/PageSections/PageSections";

const WeatherWatch = () => {
    return (
        <Fragment>
            <h1>Weather Watch</h1>
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

export default WeatherWatch;
