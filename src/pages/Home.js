import React from "react";
import PageData from "../data/Home";
import PageSections from "../components/PageSections/PageSections";

const Home = () => {
    return (
        <PageSections
            home={true}
            aboutMe={PageData.aboutMe}
            currentWork={PageData.currentWork}
            pastExperience={PageData.pastExperience}
            portfolioInfo={PageData.portfolioInfo}
        />
    );
};

export default Home;
