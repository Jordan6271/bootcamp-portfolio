import Images from "../images/week13/Images";

const images = Images;

const introText = `This project marks my first interaction with creating my own API, and then calling on and manipulating that data. There is no frontend aspect, so the API has to be used via a specialised GUI, such as Insomnia or Postman. Essentially, this API is a book list, which allows users to add an item to the list with required fields of "title", "author", and "read" (read means 'read status' and is of boolean type). It has all four CRUD operations; allowing a user to create, read, update, and delete entries, including retrieving objects from the list via specific IDs.`;

const difficultyText = `I had a bit of difficulty during this project with the correct payload information to call on to find a book using a specific ID in the url. I set up the url structure in the form of "/id=:id", so my error handling needed to be quite specific in order to report back helpful error messages. Overall though, I didn't find this project particularly difficult once I got over the hurdle of understanding how to properly interact with the results of the response to my requests.`;

const progressionText = `This project helped me significantly improve both my knowledge of API and API calls, and more informative error handling. I also believe that launching the API on Heroku was a point of progression for me too, as there are relatively quite a lot of hoops to jump through to set a project up using it compared to Github Pages, and I feel it was a good sign that I managed to do this without much pain. Being able to interact with and manipulate API calls will be invaluable for future projects, as everything else I currently have planned are going to be full stack projects.`;

const links = {
    heroku: `https://bootcamp-week13-booklist.herokuapp.com/books`,
    repo: `https://github.com/Jordan6271/bootcamp-project-week13`,
};

const pageData = {
    images: images,
    intro: introText,
    difficulty: difficultyText,
    progression: progressionText,
    links: links,
};

export default pageData;
