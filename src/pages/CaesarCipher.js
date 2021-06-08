import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week7/Images";

const carouselImages = Images;

const CaesarCipher = () => {
    return (
        <Fragment>
            <h1>CaesarCipher</h1>
            <div id="intro">
                <h2>Project Overview</h2>
                <Carousel images={carouselImages} />
                <p>
                    This project was to create a Caesar Cipher, which is
                    essentially a form of substitution cipher that shifts
                    through the alphabet in accordance with the numerical key
                    given, so if you put a key of 1, each letter in the code
                    would shift one character to the right. I made my cipher
                    shift through the ascii alphabet from '!' (ascii value 33)
                    all the way to '~' (ascii value 126). I added the
                    functionality to decrypt the given code as well and encrypt,
                    which just runs the same function but in reverse, so it
                    iterates backwards through the appropriate range of ascii
                    values. I also decided to use as minimal handwritten CSS as
                    possible, and did as much of the styling as I could through
                    pure bootstrap. I think this turned out very well, and
                    overall I'm pleased with how the project ended up.
                </p>
            </div>
            <div id="difficulties">
                <h2>Difficulties</h2>
                <p>
                    A large part of the difficulty I had with this project
                    stemmed from the mathematics behind looping around to the
                    other end of the chosen ascii value range when the code +
                    the key would push the cipher past the boundary of the ascii
                    range. I found it quite frustrating to debug each step,
                    given how complex the <code class="text-danger">for</code>
                    {` `}
                    loops were becoming, and trying to figure out how to fix the
                    bugs with the calculations after locating where the code was
                    incorrect was no easy task either. As I also decided to try
                    and style everything using pure bootstrap, some of the
                    components took a while to figure out, but I overcame this
                    quite quickly after I read up more about bootstrap.
                </p>
            </div>
            <div id="progression">
                <h2>Progression</h2>
                <p>
                    The main thing that this project helped me with was to push
                    me to think more mathematically-minded and translate that
                    learning into code. I ended up having to use nested{` `}
                    <code class="text-danger">for</code> loops to move the
                    current position of the output calculation back to the other
                    side of the chosen range of ascii values, and spent a lot of
                    time debugging what was going wrong with these calculations
                    through the use of{` `}
                    <code class="text-danger">console.log()</code>. As I
                    attempted to style every component with bootstrap rather
                    than handwritten CSS, this project also gave me a chance to
                    get much more familiar with bootstrap components, especially
                    how spacing can be done with the framework. Overall, I'm
                    most pleased with my progression on the bootstrap front, as
                    this is a very transferrable skill on every site I'll make
                    in the future, including this portfolio.
                </p>
            </div>
            <div id="links">
                <h2>Links to Project</h2>
                <p>
                    In case you're interested in having a look yourself,{` `}
                    <a
                        href="https://jordan6271.github.io/bootcamp-project-week7/"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the project on GitHub pages, and{` `}
                    <a
                        href="https://github.com/Jordan6271/bootcamp-project-week7"
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

export default CaesarCipher;
