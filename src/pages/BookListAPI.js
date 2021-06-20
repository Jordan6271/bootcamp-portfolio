import React, { Fragment } from "react";
import PageData from "../data/BookListAPI";
import PageSections from "../components/PageSections/PageSections";

const BookListAPI = () => {
    return (
        <Fragment>
            <h1>Book List API</h1>
            <PageSections
                backend={true}
                carouselImages={PageData.images}
                introText={PageData.intro}
                difficultyText={PageData.difficulty}
                progressionText={PageData.progression}
                links={PageData.links}
            />
        </Fragment>
    );
};

export default BookListAPI;
