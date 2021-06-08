import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import Images from "../images/week5/Images";

const carouselImages = Images;

const OOPAdventureGame = () => {
    return (
        <Fragment>
            <h1>OOP Adventure Game</h1>
            <div id="intro">
                <h2>Project Overview</h2>
                <Carousel images={carouselImages} />
                <p>
                    This project has been my favourite one so far through the
                    bootcamp. The task was to make a text-based adventure game
                    using object oriented JavaScript programming. I made a
                    haunted house, escape room-esque story, where the player has
                    to explore a manor filled with helpful items, hard-to-kill
                    enemies, and perhaps a hidden passageway. The goal of the
                    game is to escape the manor without dying. I created visible
                    areas on screen for obviously the information and user
                    input, and also a current health value and an inventory
                    list. There is a combat system which essentially uses
                    'weakness items', by which I mean that most enemies have at
                    least one item which they are weak to, and if you are
                    holding that item in your inventory when you choose to start
                    the fight with them, you will gain health, otherwise you
                    will lose health. The operative word there is 'choose' -
                    there is no fight that will begin just by entering a room,
                    the player has to specifically do an action to start each
                    fight, so if they start a fight they're unprepared for it's
                    their own fault, really. Overall, I'm very happy with how
                    this project turned out, and I learnt a lot while making it.
                </p>
            </div>
            <div id="difficulties">
                <h2>Difficulties</h2>
                <p>
                    I hadn't done a lot using JavaScript before starting this
                    project, so the whole class-based system was new to me and
                    took a while to fully understand, especially constructors.
                    I'd honestly say that pretty much every component of this
                    project was a new problem for me to overcome, including
                    implementing functions and which classes to best attach them
                    to, saving the states of the rooms depending on whether
                    certain requirements had been met, displaying the health /
                    inventory sections of the screen, and the combat system,
                    along with balancing the health of items / enemies to make
                    the game to the difficulty level I wanted. Probably the
                    challenge that took me the longest to solve, though, was
                    creating the list of inventory items, but eventually I
                    figured out a way to make it work using a simple{` `}
                    <code class="text-danger">if</code> statement, and pushing
                    to an inventory array appended to the{` `}
                    <code class="text-danger">Player</code> class.
                </p>
            </div>
            <div id="progression">
                <h2>Progression</h2>
                <p>
                    Every hurdle I eventually got over was a significant measure
                    of progression for me on this project. I learnt how to use
                    classes in JavaScript and attach functions to them, how to
                    use arrays to save states of rooms and keep track of what
                    the player has done in the game so far, how to update text
                    that was displayed on-screen to the player (specifically
                    current health and the inventory list), how to create
                    commands that would do certain functions (for instance
                    moving between rooms or picking up items) and display
                    relevant error messages if incorrect inputs were entered,
                    and also how to make sure that if the players' health
                    reaches 0 then the game ends. I'm happy with the progression
                    I had over the course of this project as a whole, I can't
                    really pick any one thing to highlight here - I'm just proud
                    of how it all came together and created a functional game. I
                    have plans to take the concept behind this game and try and
                    create a 2D game with the idea to get a start with C++.
                </p>
            </div>
            <div id="links">
                <h2>Links to Project</h2>
                <p>
                    In case you're interested in having a look yourself,{` `}
                    <a
                        href="https://jordan6271.github.io/bootcamp-project-week5/"
                        target="_blank"
                        class="text-danger"
                        rel="noreferrer"
                    >
                        here is a link
                    </a>
                    {` `}
                    to the project on GitHub pages, and{` `}
                    <a
                        href="https://github.com/Jordan6271/bootcamp-project-week5"
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

export default OOPAdventureGame;
