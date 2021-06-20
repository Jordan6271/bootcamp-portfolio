import Images from "../images/week14/Images";

const images = Images;

const introText = `This project was my first attempt at a real full-stack application. It includes a database and an API, along with a front end UI for a user to use, and all of this is tied together mainly through the use of Mongo. I enjoyed the concepts behind this project, and had fun setting everything up correctly. It is an events list app, where users can input an event along with some required associated information, and this is then saved in a database, and can then be viewed from the frontend UI, the API, or in the database itself. It contains all of the CRUD operations, and a user can only interact with the database via the API if they have a valid authorization token.`;

const difficultyText = `There were many challenges in this project, ranging from correctly setting up user authentication and passing the token through to the API client, to creating the databases and pushing data along to the necessary parts, to creating the forms used in the frontend in a way that all the information required in the database is properly shown to the user that it is in fact required. I also had some issues with error handling in the backend section, as I allowed the frontend error handling to be done mainly through the use of React forms, and had to specify errors relating to these manually in the API client. There was also slight difficulty in getting the frontend, hosted on Github Pages, and the API, hosted on Heroku, to both interact with the database, hosted on Mongo Atlas. However, all of these challenges were overcome by the end of the project.`;

const progressionText = `I progressed in many aspects of my coding knowledge during this project. Outside of the specific scope of coding, I learnt a lot regarding database management and API tooling. In terms of coding, however, I figured out how to pass authentication tokens through the data in order to allow the user to see different results on their respective UIs (frontend or API). I also managed to ramp up my use of error handling in the API, allowing for more specific messages to be received by the user than my previous projects were capable of. This was the first project where I had a functional login page, and also the first project where I had the different parts of the project hosted in different repositories (although these have been moved into one mega-repo for ease of linking to from this portfolio). I am incredibly pleased with how this project turned out functionally, and would like to do more in terms of making the frontend UI look nicer than it does stylistically, and also add a 'Register' form so that users can create new accounts and see the events data linked to their own accounts.`;

const links = {
    ghPages: `https://jordan6271.github.io/bootcamp-project-week14-frontend/#/`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week14-frontend`,
    heroku: `https://bootcamp-week14-eventful.herokuapp.com/`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
