import Images from "../images/week9/Images";

const images = Images;

const introText = `This project was the first React app I had properly interacted with. It's a calculator with simple mathematical functions; nothing brain-wracking to implement. I used CSS to style it like a calculator, and used Bootstrap where possible to make the styling consistent.`;

const difficultyText = `Wrapping my head around how to implement the mathematical functions without the use of the JavaScript "eval()" function took a bit of time. I also had some trouble with styling the calculator - I attempted to use Bootstrap where possible, but still wanted to make a distinct yet consistent colour scheme for different button types. It turns out it is rather difficult to manipulate Bootstrap buttons to not have any outline / border that persists between clicks, and I never did quite figure out the correct CSS implementation to get that working fluidly.`;

const progressionText = `This project really helped me progress with my programming skills in the sense that it introduced me to React and how to host a React app on Github Pages, which was valuable for many of the following projects (and some personal projects I am planning). I am interested in extending this project in the future to allow some scientific formulae and functions, but that will largely be trying to figure out what calculations are needed to make that happen.`;

const links = {
    ghPages: `https://jordan6271.github.io/bootcamp-project-week9/`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week9`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
