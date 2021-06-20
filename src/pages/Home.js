import React from "react";
import PageData from "../data/Home";
import HomePage from "../components/PageSections/HomePage";

const Home = () => {
    return (
        <HomePage
            aboutMe={PageData.aboutMe}
            currentWork={PageData.currentWork}
            pastExperience={PageData.pastExperience}
            portfolioInfo={PageData.portfolioInfo}
        />
    );
};

export default Home;
