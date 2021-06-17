import Images from "../images/week10/Images";

const images = Images;

const introText = `This project essentially was to make a social site, with cards for new posts and a form for a user to add a new post. It gave me an introduction to proper state management with React, and I got my first taste of pulling props through from one component to another, and using it there. There is also some error handling added on the form to create a new post.`;

const difficultyText = `I had some ideas about this project to allow users to further customise their notes by changing the colour. This gave some issues in the sense that in order to do this, I found a free image of a sticky note, and recoloured it, to have 6 different options for users. When this is posted to the board, it isn't particularly responsive, and gets cut off at smaller screen sizes. This caused me a lot of aggro, but I decided to just keep it as it is in the end.`;

const progressionText = `This project helped me grasp the concept of passing props through to child components, which proving to be incredibly useful for upcoming projects. It also gave me an understanding of how to add items and objects to the users' localStorage, and manipulate the information shown to them through that.`;

const links = {
    ghPages: `https://jordan6271.github.io/bootcamp-project-week10/#/`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week10`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
