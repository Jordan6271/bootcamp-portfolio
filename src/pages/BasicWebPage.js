import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week1/Images";

const carouselImages = Images;

const BasicWebPage = () => {
    return (
        <Fragment>
            <h1>Basic Web Page</h1>
            <div id="intro">
                <h2>Project Overview</h2>
                <Carousel images={carouselImages} />
                <p>
                    The first project for the bootcamp was to create a simple
                    page to demonstrate basic HTML skills, and show our current
                    knowledge of Git, the GitHub workflow, and the Unix shell. I
                    just made a simple one-page site with some descriptions of
                    the topics in question and also screenshots of some commands
                    in action.
                </p>
            </div>
            <div id="difficulties">
                <h2>Difficulties</h2>
                <p>
                    As I had used the git workflow in the past, and was already
                    pretty familiar with unix commands, there wasn't too much
                    that I had real trouble with for this project. It did take a
                    little bit of time to go over how to write CSS again, as I
                    hadn't written CSS myself for a few years prior to starting
                    the bootcamp. I also wasn't used to doing mobile-first
                    design, so some aspects of the site aren't particularly good
                    for a smaller screen view - the main culprit here are the
                    pictures I added to show the shell commands.
                </p>
            </div>
            <div id="progression">
                <h2>Progression</h2>
                <p>
                    After deciding on the page layout and what specifically to
                    write descriptions about, the majority of my time was spent
                    on implementing the CSS for the page and trying to get the
                    layout for the pictures correct. In the end, I styled the
                    pictures as I wanted them for desktop view, but did not
                    attempt a mobile-first design and so when resizing the
                    screen, they're still unreadable. Overall, I would say I am
                    happy with how the project turned out, and it gave me a good
                    foundation for future projects in terms of what I still
                    wanted to improve on.
                </p>
            </div>
            <div id="links">
                <h2>Links to Project</h2>
                <p>
                    In case you're interested in having a look yourself,{` `}
                    <a
                        href="https://jordan6271.github.io/bootcamp-project-week1/index.html"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the project on GitHub pages, and{` `}
                    <a
                        href="https://github.com/Jordan6271/bootcamp-project-week1"
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

export default BasicWebPage;
