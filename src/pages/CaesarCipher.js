import React, { Fragment } from "react";
import PageData from "../data/CaesarCipher";
import PageSections from "../components/PageSections/PageSections";

const CaesarCipher = () => {
    return (
        <Fragment>
            <h1>Caesar Cipher</h1>
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

export default CaesarCipher;
