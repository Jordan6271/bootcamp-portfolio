import React, { Fragment } from "react";
import PageData from "../data/JavaScriptQuiz";
import PageSections from "../components/PageSections/PageSections";

const JavaScriptQuiz = () => {
    return (
        <Fragment>
            <h1>JavaScript Quiz</h1>
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

export default JavaScriptQuiz;
