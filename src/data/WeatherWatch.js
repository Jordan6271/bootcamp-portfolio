import Images from "../images/week12/Images";

const images = Images;

const introText = `This project was to make a weather tracking application, using the free API from OpenWeather. It gave me some experience interacting with already made API's, and how to call on them correctly. I also decided to rewrite the majority of this project into functional components, making use of "useState" and "useEffect" from React. I chose to display the cards in a carousel using a package I found, and I added in the ability to change the location between three pre-determined places using the navigation menu.`;

const difficultyText = `The main difficulty I had with this project was when converting as much as possible over to functional components, and having to use "useEffect" instead of "componentDidMount". I was incredibly confused about the multiple versions of "useEffect" and when each of them would be called, so it took me a long time to figure out the right way to go about it. I do understand "useEffect" in far more depth now, though.`;

const progressionText = `In contrast to the difficulties I had on this project - the same thing culminated in my most significant progression. It made me discover a lot about how functional components work properly, and how to use React hooks and to change states and pass information between components. This is integral to future projects, and is incredibly useful for me at work.`;

const links = {
    ghPages: `https://jordan6271.github.io/bootcamp-project-week12/#/`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week12`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
