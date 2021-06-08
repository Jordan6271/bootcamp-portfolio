import React, { Fragment } from "react";
import PageData from "../data/OOPAdventureGame";
import PageSections from "../components/PageSections/PageSections";

const OOPAdventureGame = () => {
    return (
        <Fragment>
            <h1>OOP Adventure Game</h1>
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

export default OOPAdventureGame;
