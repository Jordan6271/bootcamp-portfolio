import Images from "../images/week11/Images";

const images = Images;

const introText = `This project is essentially a checklist app. It utilises redux to connect sections together and seamlessly navigate between tabs to display the correct information to the user without changing the url, going between "All", "To Be Completed", and "Completed". After adding an item to the checklist, the checkbox can be checked to toggle it between completed states.`;

const difficultyText = `The main gripe in this project for me was redux. I largely had to rely on the set up in an example project and just repurpose that code for my project. I now understand a lot more than I did at the time of doing the project, though. I also had a bit of difficulty regarding the state management when toggling the checkbox - initially it was not properly linked with the ID of the specific item being toggled, and that confused me for a while.`;

const progressionText = `Using redux in this project was a large point of progression for me, and although I still need to learn more around the usage of it, I understand it decently and how to set it up now. The ability to visually toggle between different pages but stay on the same actual url is also incredibly helpful and has been used in many of the upcoming projects. I would be interested in adding in functionality to let the user update an already created item, which currently is not available.`;

const links = {
    ghPages: `https://jordan6271.github.io/bootcamp-project-week11/`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week11`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
