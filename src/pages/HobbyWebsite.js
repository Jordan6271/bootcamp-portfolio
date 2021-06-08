import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week2/Images";

const carouselImages = Images;

const HobbyWebsite = () => {
    return (
        <Fragment>
            <h1>Hobby Website</h1>
            <div id="intro">
                <h2>Project Overview</h2>
                <Carousel images={carouselImages} />
                <p>
                    This project was to create a hobby website. I chose to do
                    mine about video games and the main platforms people
                    generally associate with that. A lot of the content and
                    images were taken from gaming news sites, as I felt my focus
                    was better put into the design of the site and making it
                    responsive and dynamic. There is an animation as the
                    background, which has a pause / play button at the top of
                    the page which functions as expected. Much of the CSS is
                    written manually, but for some of it I used flexbox, and it
                    was a great introduction to the world of dynamic CSS. I kept
                    the design very consistent across pages purposely, and
                    reused the same classnames for elements on different pages
                    in order to style them similarly.
                </p>
            </div>
            <div id="difficulties">
                <h2>Difficulties</h2>
                <p>
                    I had only ever used manual CSS before trying this project,
                    so the whole concept of flexbox was completely new to me. It
                    took quite a while to get my head around the capabilities of
                    it, and so there is still a lot of handwritten CSS in the
                    project files, mainly to get finnicky things like spacing
                    exactly how I wanted. I also spent a bit of time researching
                    whether I could make the background animation play and pause
                    using pure CSS, but could not find a way to do it and I am
                    pretty sure JavaScript is required to get this functionality
                    to work.
                </p>
            </div>
            <div id="progression">
                <h2>Progression</h2>
                <p>
                    This was a great project following on from the basic web
                    page task, and gave me a chance to further hone my skills in
                    HTML and CSS, which I consider the basics of programming.
                    Learning flexbox completely changed the scope of what I
                    could do with CSS in terms of responsiveness, as I was no
                    longer limited by media queries to manually set screen
                    breakpoints, and could start to space things without having
                    to work out perfect padding and margin sizes for components.
                    As I decided to use an animated background, I also had the
                    chance to look into some basic JavaScript and how to add a
                    script to interact with HTML elements, which is something I
                    had never done before.
                </p>
            </div>
            <div id="links">
                <h2>Links to Project</h2>
                <p>
                    In case you're interested in having a look yourself,{` `}
                    <a
                        href="https://jordan6271.github.io/bootcamp-project-week2/"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the project on GitHub pages, and{` `}
                    <a
                        href="https://github.com/Jordan6271/bootcamp-project-week2"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the repository files.
                </p>
            </div>
        </Fragment>
    );
};

export default HobbyWebsite;
