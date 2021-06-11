import React, { Fragment } from "react";
import PageData from "../data/WhatToDo";
import PageSections from "../components/PageSections/PageSections";

const WhatToDo = () => {
    return (
        <Fragment>
            <h1>What To Do</h1>
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

export default WhatToDo;
