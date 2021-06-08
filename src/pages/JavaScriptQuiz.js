import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week4/Images";

const carouselImages = Images;

const JavaScriptQuiz = () => {
    return (
        <Fragment>
            <h1>JavaScript Quiz</h1>
            <div id="intro">
                <h2>Project Overview</h2>
                <Carousel images={carouselImages} />
                <p>
                    In this project, I created a 10 question quiz with the use
                    of JavaScript for all of the functionality, and designed a
                    basic web page to display it with. The topic I chose was
                    World of Warcraft because it's a game I enjoy and know a lot
                    about, so I figured it would be a good chance to try out a
                    scoring system, as this would be the first time I had kept
                    track of a variable throughout functions in that way. I used
                    the <code class="text-danger">innerHTML</code> property to
                    show results at the end of the quiz and tailor it based on
                    the score the user had at the time of reaching the final
                    section. Overall, I'd say this quiz came out well and works
                    as I'd hoped functionally, but I didn't put much effort into
                    making the web page suitable for mobile and definitely
                    didn't do a mobile first design, so the display doesn't
                    really work on smaller screens.
                </p>
            </div>
            <div id="difficulties">
                <h2>Difficulties</h2>
                <p>
                    The only real difficulty of this task for me was the scoring
                    system, and I'm still not entirely happy with how it turned
                    out, as I am sure there is a way to rewrite the part of the
                    {` `}
                    <code class="text-danger">revealResults()</code> function
                    that calculates the score in a way to remove the redundancy
                    - perhaps with the use of a{` `}
                    <code class="text-danger">for</code> loop. It was also a
                    struggle for me to get scoring to work with the HTML, and
                    considered just writing the quiz questions fully in
                    JavaScript, but the use of the{` `}
                    <code class="text-danger">value</code> attribute on the
                    radio labels helped a lot in the end.
                </p>
            </div>
            <div id="progression">
                <h2>Progression</h2>
                <p>
                    Although I think the function to calculate scoring could be
                    improved upon, I am pleased with how far I've come in terms
                    of being able to write a function that takes a variable,
                    edits it, and spits out the new variable, and even more so
                    that the display on the page changes based off what that new
                    variable is. I've also never used radio label values in the
                    way I have to calculate the score, so that's another area
                    that this project helped me learn.
                </p>
            </div>
            <div id="links">
                <h2>Links to Project</h2>
                <p>
                    In case you're interested in having a look yourself,{` `}
                    <a
                        href="https://jordan6271.github.io/bootcamp-project-week4/"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the project on GitHub pages, and{` `}
                    <a
                        href="https://github.com/Jordan6271/bootcamp-project-week4"
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

export default JavaScriptQuiz;
