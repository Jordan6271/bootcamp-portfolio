(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(17),s=n.n(i),r=n(38),c=n(7),h=n(68),l=n(69),d=n(67),p=n(1),m=function(){return Object(p.jsx)(a.Fragment,{children:Object(p.jsxs)(h.a,{bg:"dark",variant:"dark",children:[Object(p.jsx)(h.a.Brand,{href:"/",className:"mx-5",children:"My Portfolio"}),Object(p.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(h.a.Collapse,{id:"basic-navbar-nav"}),Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(d.a,{title:"Phase 1",children:[Object(p.jsx)(d.a.Item,{href:"/week1",children:"Basic Web Page"}),Object(p.jsx)(d.a.Item,{href:"/week2",children:"Hobby Website"}),Object(p.jsx)(d.a.Item,{href:"/week4",children:"JavaScript Quiz"}),Object(p.jsx)(d.a.Item,{href:"/week5",children:"OOP Adventure Game"}),Object(p.jsx)(d.a.Item,{href:"/week7",children:"Caesar Cipher"})]}),Object(p.jsxs)(d.a,{title:"Phase 2",children:[Object(p.jsx)(d.a.Item,{href:"/week9",children:"Calculator"}),Object(p.jsx)(d.a.Item,{href:"/week10",children:"Noteable"}),Object(p.jsx)(d.a.Item,{href:"/week11",children:"What To Do"}),Object(p.jsx)(d.a.Item,{href:"/week12",children:"Weather Watch"}),Object(p.jsx)(d.a.Item,{href:"/week13",children:"Book List API"}),Object(p.jsx)(d.a.Item,{href:"/week14",children:"Eventful"})]}),Object(p.jsx)(l.a.Link,{href:"/group-project",children:"Group Project"})]})]})})},u={aboutMe:{title:"About Me",text:"My name is Jordan, and I have always been interested in\nprogramming in general. I've tried my hand at creating\nwebsites, making lots of interesting tools, and designing\nsimple games. This has given me some experience using HTML,\nCSS, JavaScript, and C++. This portfolio is specifically\ngoing to be regarding the projects I've been working on\nthroughout my time on a bootcamp programming course taught\nby The Developer Academy. I will be using this design as a\nbase to make a portfolio of my personal projects in the\nfuture."},currentWork:{title:"Current Work",text:"I currently work with Mattress Online as an apprentice on\nthe web team. My main tasks recently have been associated\nwith writing automated tests using Cypress, which has a\nJavaScript framework, and a lot of the projects I've worked\non so far with this bootcamp has helped me in my everyday\nwork, and I've been able to see significant progress in how\nI am thinking about and writing my tests. It's also given me\na great basis for getting up to speed with the working life\nof a developer, and how teamwork and communication can be so\nimportant in such an environment."},pastExperience:{title:"Past Experience",text:"Other than my current work, all of my IT and coding\nexperience has really come from personal projects and\nplaying around with things as a hobby. I did Astrophysics at\nuniversity, and while I did do a couple of programming\nmodules, the only other part of my degree that is relevant\nto me nowadays is the mathematical parts, which definitely\nhelps with game design. After university I had a\nnon-technical entry-level job, and spent a lot of my spare\ntime trying to make websites and simple video games (along\nwith playing lots of video games, which has given me a large\namount of passion to eventually make a 'proper' game that\nI'd enjoy sitting down and playing for as long as I have\nsunk into some others)."},portfolioInfo:{title:"About This Portfolio",info:"I've decided the best way for me to lay this portfolio out\n    is likely to be giving each project its own individual page,\n    and describing there how I tackled each task and screenshots\n    of what I ended up with, along with any hurdles I\n    encountered on the journey and how they were overcome. There\n    will also be a link to each of the project repositories on\n    GitHub, and the GitHub pages link for you to check out how\n    things function for yourselves. I hope you enjoy my work.",note:"Also, as a note, I will mention that this portfolio is not\n    going to be hosted on a personal domain because I would like\n    to create my own portfolio after the bootcamp is finished\n    using this as a template, and I don't want to spend too much\n    time finding non-copyrighted images and animations for all\n    of the projects I've done so far. If any projects are to be\n    included in my personal portfolio that is hosted elsewhere,\n    rest assured that I will do my due diligence and make sure\n    none of the content is stolen or copyrighted."}},g=function(e){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("p",{children:e.text})]})},f=n(45),b=n(41),w=function(e){var t=Object(a.useState)([]),n=Object(f.a)(t,2),o=n[0],i=n[1];Object(a.useEffect)((function(){i(e.images)}),[e.images]);return Object(p.jsx)(b.a,{className:"mx-auto w-75",children:o.map((function(e){return Object(p.jsx)(b.a.Item,{children:Object(p.jsx)("img",{src:e.image,alt:e.description,className:"w-100"})},e.id)}))})},j=function(e){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h2",{children:"Project Overview"}),Object(p.jsx)(w,{images:e.images}),Object(p.jsx)("p",{children:e.text})]})},y=function(e){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h2",{children:"Links to Project"}),Object(p.jsxs)("p",{children:["In case you're interested in having a look yourself,"," ",Object(p.jsx)("a",{href:e.links.ghPages,target:"_blank",class:"text-danger",rel:"noreferrer",children:"here is a link"})," ","to the project on GitHub pages, and"," ",Object(p.jsx)("a",{href:e.links.repo,target:"_blank",class:"text-danger",rel:"noreferrer",children:"here is a link"})," ","to the repository files."]})]})},x=function(e){return e.home?Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(g,{title:e.aboutMe.title,text:e.aboutMe.text}),Object(p.jsx)(g,{title:e.currentWork.title,text:e.currentWork.text}),Object(p.jsx)(g,{title:e.pastExperience.title,text:e.pastExperience.text}),Object(p.jsx)(g,{title:e.portfolioInfo.title,text:e.portfolioInfo.info}),Object(p.jsx)(g,{text:e.portfolioInfo.note})]}):Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(j,{images:e.carouselImages,text:e.introText}),Object(p.jsx)(g,{title:"Difficulties",text:e.difficultyText}),Object(p.jsx)(g,{title:"Progression",text:e.progressionText}),Object(p.jsx)(y,{links:e.links})]})},k=function(){return Object(p.jsx)(x,{home:!0,aboutMe:u.aboutMe,currentWork:u.currentWork,pastExperience:u.pastExperience,portfolioInfo:u.portfolioInfo})},I={images:[{id:1,image:n.p+"static/media/git.fa349fc7.png",description:"Git and GitHub Workflow"},{id:2,image:n.p+"static/media/unix.6aae60d0.png",description:"Unix Shell"}],intro:"The first project for the bootcamp was to create a simple\npage to demonstrate basic HTML skills, and show our current\nknowledge of Git, the GitHub workflow, and the Unix shell. I\njust made a simple one-page site with some descriptions of\nthe topics in question and also screenshots of some commands\nin action.",difficulty:"As I had used the git workflow in the past, and was already\npretty familiar with unix commands, there wasn't too much\nthat I had real trouble with for this project. It did take a\nlittle bit of time to go over how to write CSS again, as I\nhadn't written CSS myself for a few years prior to starting\nthe bootcamp. I also wasn't used to doing mobile-first\ndesign, so some aspects of the site aren't particularly good\nfor a smaller screen view - the main culprit here are the\npictures I added to show the shell commands.",progression:"After deciding on the page layout and what specifically to\nwrite descriptions about, the majority of my time was spent\non implementing the CSS for the page and trying to get the\nlayout for the pictures correct. In the end, I styled the\npictures as I wanted them for desktop view, but did not\nattempt a mobile-first design and so when resizing the\nscreen, they're still unreadable. Overall, I would say I am\nhappy with how the project turned out, and it gave me a good\nfoundation for future projects in terms of what I still\nwanted to improve on.",links:{ghPages:"https://jordan6271.github.io/bootcamp-project-week1/index.html",repo:"https://github.com/Jordan6271/bootcamp-project-week1"}},v=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"Basic Web Page"}),Object(p.jsx)(x,{carouselImages:I.images,introText:I.intro,difficultyText:I.difficulty,progressionText:I.progression,links:I.links})]})},O={images:[{id:1,image:n.p+"static/media/site-intro.ac26c258.png",description:"Intro Section of Hobby Site"},{id:2,image:n.p+"static/media/flex-desktop.6340741b.png",description:"Flexbox CSS on desktop"},{id:3,image:n.p+"static/media/flex-mobile.ee9cf35d.png",description:"Flexbox CSS on mobile"},{id:4,image:n.p+"static/media/consistency.1660e14b.png",description:"Showing how design was kept consistent across pages"}],intro:"This project was to create a hobby website. I chose to do\nmine about video games and the main platforms people\ngenerally associate with that. A lot of the content and\nimages were taken from gaming news sites, as I felt my focus\nwas better put into the design of the site and making it\nresponsive and dynamic. There is an animation as the\nbackground, which has a pause / play button at the top of\nthe page which functions as expected. Much of the CSS is\nwritten manually, but for some of it I used flexbox, and it\nwas a great introduction to the world of dynamic CSS. I kept\nthe design very consistent across pages purposely, and\nreused the same classnames for elements on different pages\nin order to style them similarly.",difficulty:"I had only ever used manual CSS before trying this project,\nso the whole concept of flexbox was completely new to me. It\ntook quite a while to get my head around the capabilities of\nit, and so there is still a lot of handwritten CSS in the\nproject files, mainly to get finnicky things like spacing\nexactly how I wanted. I also spent a bit of time researching\nwhether I could make the background animation play and pause\nusing pure CSS, but could not find a way to do it and I am\npretty sure JavaScript is required to get this functionality\nto work.",progression:"This was a great project following on from the basic web\npage task, and gave me a chance to further hone my skills in\nHTML and CSS, which I consider the basics of programming.\nLearning flexbox completely changed the scope of what I\ncould do with CSS in terms of responsiveness, as I was no\nlonger limited by media queries to manually set screen\nbreakpoints, and could start to space things without having\nto work out perfect padding and margin sizes for components.\nAs I decided to use an animated background, I also had the\nchance to look into some basic JavaScript and how to add a\nscript to interact with HTML elements, which is something I\nhad never done before.",links:{ghPages:"https://jordan6271.github.io/bootcamp-project-week2/",repo:"https://github.com/Jordan6271/bootcamp-project-week2"}},S=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"Hobby Website"}),Object(p.jsx)(x,{carouselImages:O.images,introText:O.intro,difficultyText:O.difficulty,progressionText:O.progression,links:O.links})]})},T={images:[{id:1,image:n.p+"static/media/js-quiz.628fba30.png",description:"Quiz Intro"},{id:2,image:n.p+"static/media/quiz-questions.13f33d9d.png",description:"Quiz Questions"},{id:3,image:n.p+"static/media/quiz-results.49db01de.png",description:"Quiz Results"},{id:4,image:n.p+"static/media/quiz-functions.9a6dcedb.png",description:"Quiz Functions"}],intro:"In this project, I created a 10 question quiz with the use\nof JavaScript for all of the functionality, and designed a\nbasic web page to display it with. The topic I chose was\nWorld of Warcraft because it's a game I enjoy and know a lot\nabout, so I figured it would be a good chance to try out a\nscoring system, as this would be the first time I had kept\ntrack of a variable throughout functions in that way. I used\nthe \"innerHTML\" property to\nshow results at the end of the quiz and tailor it based on\nthe score the user had at the time of reaching the final\nsection. Overall, I'd say this quiz came out well and works\nas I'd hoped functionally, but I didn't put much effort into\nmaking the web page suitable for mobile and definitely\ndidn't do a mobile first design, so the display doesn't\nreally work on smaller screens.",difficulty:'The only real difficulty of this task for me was the scoring\nsystem, and I\'m still not entirely happy with how it turned\nout, as I am sure there is a way to rewrite the part of the "revealResults()" function that calculates the score in a way to remove the redundancy\n- perhaps with the use of a "for" loop. It was also a\nstruggle for me to get scoring to work with the HTML, and\nconsidered just writing the quiz questions fully in\nJavaScript, but the use of the "value" attribute on the\nradio labels helped a lot in the end.',progression:"Although I think the function to calculate scoring could be\nimproved upon, I am pleased with how far I've come in terms\nof being able to write a function that takes a variable,\nedits it, and spits out the new variable, and even more so\nthat the display on the page changes based off what that new\nvariable is. I've also never used radio label values in the\nway I have to calculate the score, so that's another area\nthat this project helped me learn.",links:{ghPages:"https://jordan6271.github.io/bootcamp-project-week4/",repo:"https://github.com/Jordan6271/bootcamp-project-week4"}},C=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"JavaScript Quiz"}),Object(p.jsx)(x,{carouselImages:T.images,introText:T.intro,difficultyText:T.difficulty,progressionText:T.progression,links:T.links})]})},W={images:[{id:1,image:n.p+"static/media/intro.934be270.png",description:"Game Intro Screen"},{id:2,image:n.p+"static/media/start-game.e6a98edf.png",description:"Game Start"},{id:3,image:n.p+"static/media/item-pickup.170a33bd.png",description:"Item Pickup"},{id:4,image:n.p+"static/media/health-increase.7423fdb3.png",description:"Health Increase"},{id:5,image:n.p+"static/media/easy-fight.1083c074.png",description:"Fight Win Easy Mode"},{id:6,image:n.p+"static/media/hard-fight.77ba15bb.png",description:"Fight Win Hard Mode"},{id:7,image:n.p+"static/media/death.63bfa29c.png",description:"Death Screen"},{id:8,image:n.p+"static/media/win-game.4571c39c.png",description:"Win Screen"}],intro:"This project has been my favourite one so far through the\nbootcamp. The task was to make a text-based adventure game\nusing object oriented JavaScript programming. I made a\nhaunted house, escape room-esque story, where the player has\nto explore a manor filled with helpful items, hard-to-kill\nenemies, and perhaps a hidden passageway. The goal of the\ngame is to escape the manor without dying. I created visible\nareas on screen for obviously the information and user\ninput, and also a current health value and an inventory\nlist. There is a combat system which essentially uses\n'weakness items', by which I mean that most enemies have at\nleast one item which they are weak to, and if you are\nholding that item in your inventory when you choose to start\nthe fight with them, you will gain health, otherwise you\nwill lose health. The operative word there is 'choose' -\nthere is no fight that will begin just by entering a room,\nthe player has to specifically do an action to start each\nfight, so if they start a fight they're unprepared for it's\ntheir own fault, really. Overall, I'm very happy with how\nthis project turned out, and I learnt a lot while making it.",difficulty:' I hadn\'t done a lot using JavaScript before starting this\nproject, so the whole class-based system was new to me and\ntook a while to fully understand, especially constructors.\nI\'d honestly say that pretty much every component of this\nproject was a new problem for me to overcome, including\nimplementing functions and which classes to best attach them\nto, saving the states of the rooms depending on whether\ncertain requirements had been met, displaying the health /\ninventory sections of the screen, and the combat system,\nalong with balancing the health of items / enemies to make\nthe game to the difficulty level I wanted. Probably the\nchallenge that took me the longest to solve, though, was\ncreating the list of inventory items, but eventually I\nfigured out a way to make it work using a simple "if" statement, and pushing\nto an inventory array appended to the "Player" class.',progression:"Every hurdle I eventually got over was a significant measure\nof progression for me on this project. I learnt how to use\nclasses in JavaScript and attach functions to them, how to\nuse arrays to save states of rooms and keep track of what\nthe player has done in the game so far, how to update text\nthat was displayed on-screen to the player (specifically\ncurrent health and the inventory list), how to create\ncommands that would do certain functions (for instance\nmoving between rooms or picking up items) and display\nrelevant error messages if incorrect inputs were entered,\nand also how to make sure that if the players' health\nreaches 0 then the game ends. I'm happy with the progression\nI had over the course of this project as a whole, I can't\nreally pick any one thing to highlight here - I'm just proud\nof how it all came together and created a functional game. I\nhave plans to take the concept behind this game and try and\ncreate a 2D game with the idea to get a start with C++.",links:{ghPages:"https://jordan6271.github.io/bootcamp-project-week5/",repo:"https://github.com/Jordan6271/bootcamp-project-week5"}},P=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"OOP Adventure Game"}),Object(p.jsx)(x,{carouselImages:W.images,introText:W.intro,difficultyText:W.difficulty,progressionText:W.progression,links:W.links})]})},F={images:[{id:1,image:n.p+"static/media/caesar-cipher.c45491f5.png",description:"Caesar Cipher"},{id:2,image:n.p+"static/media/cipher-input.a41636e4.png",description:"Cipher Input"},{id:3,image:n.p+"static/media/encrypt-screen.94fa3a72.png",description:"Encrypt Screen"},{id:4,image:n.p+"static/media/decrypt-screen.cff860f3.png",description:"Decrypt Screen"}],intro:"This project was to create a Caesar Cipher, which is\nessentially a form of substitution cipher that shifts\nthrough the alphabet in accordance with the numerical key\ngiven, so if you put a key of 1, each letter in the code\nwould shift one character to the right. I made my cipher\nshift through the ascii alphabet from '!' (ascii value 33)\nall the way to '~' (ascii value 126). I added the\nfunctionality to decrypt the given code as well and encrypt,\nwhich just runs the same function but in reverse, so it\niterates backwards through the appropriate range of ascii\nvalues. I also decided to use as minimal handwritten CSS as\npossible, and did as much of the styling as I could through\npure bootstrap. I think this turned out very well, and\noverall I'm pleased with how the project ended up.",difficulty:"A large part of the difficulty I had with this project\nstemmed from the mathematics behind looping around to the\nother end of the chosen ascii value range when the code +\nthe key would push the cipher past the boundary of the ascii\nrange. I found it quite frustrating to debug each step,\ngiven how complex the ".concat(Object(p.jsx)("code",{class:"text-danger",children:"for"})," \nloops were becoming, and trying to figure out how to fix the\nbugs with the calculations after locating where the code was\nincorrect was no easy task either. As I also decided to try\nand style everything using pure bootstrap, some of the\ncomponents took a while to figure out, but I overcame this\nquite quickly after I read up more about bootstrap."),progression:'The main thing that this project helped me with was to push\nme to think more mathematically-minded and translate that\nlearning into code. I ended up having to use nested "for" loops to move the\ncurrent position of the output calculation back to the other\nside of the chosen range of ascii values, and spent a lot of\ntime debugging what was going wrong with these calculations\nthrough the use of "console.log()". As I\nattempted to style every component with bootstrap rather\nthan handwritten CSS, this project also gave me a chance to\nget much more familiar with bootstrap components, especially\nhow spacing can be done with the framework. Overall, I\'m\nmost pleased with my progression on the bootstrap front, as\nthis is a very transferrable skill on every site I\'ll make\nin the future, including this portfolio.',links:{ghPages:"https://jordan6271.github.io/bootcamp-project-week7/",repo:"https://github.com/Jordan6271/bootcamp-project-week7"}},A={Home:k,BasicWebPage:v,HobbyWebsite:S,JavaScriptQuiz:C,OOPAdventureGame:P,CaesarCipher:function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"Caesar Cipher"}),Object(p.jsx)(x,{carouselImages:F.images,introText:F.intro,difficultyText:F.difficulty,progressionText:F.progression,links:F.links})]})},Calculator:function(){return Object(p.jsx)(a.Fragment,{children:"Calculator"})},Noteable:function(){return Object(p.jsx)(a.Fragment,{children:"Noteable"})},WhatToDo:function(){return Object(p.jsx)(a.Fragment,{children:"What To Do"})},WeatherWatch:function(){return Object(p.jsx)(a.Fragment,{children:"Weather Watch"})},BookListAPI:function(){return Object(p.jsx)(a.Fragment,{children:"Book List API"})},Eventful:function(){return Object(p.jsx)(a.Fragment,{children:"Eventful"})},RecipeBook:function(){return Object(p.jsx)(a.Fragment,{children:"Recipe Book"})},NotFound:function(){return Object(p.jsx)(a.Fragment,{children:"404 page not found"})}},J=function(){return Object(p.jsx)(a.Fragment,{children:Object(p.jsxs)(c.c,{children:[Object(p.jsx)(c.a,{exact:!0,path:"/",component:A.Home}),Object(p.jsx)(c.a,{exact:!0,path:"/week1",component:A.BasicWebPage}),Object(p.jsx)(c.a,{exact:!0,path:"/week2",component:A.HobbyWebsite}),Object(p.jsx)(c.a,{exact:!0,path:"/week4",component:A.JavaScriptQuiz}),Object(p.jsx)(c.a,{exact:!0,path:"/week5",component:A.OOPAdventureGame}),Object(p.jsx)(c.a,{exact:!0,path:"/week7",component:A.CaesarCipher}),Object(p.jsx)(c.a,{exact:!0,path:"/week9",component:A.Calculator}),Object(p.jsx)(c.a,{exact:!0,path:"/week10",component:A.Noteable}),Object(p.jsx)(c.a,{exact:!0,path:"/week11",component:A.WhatToDo}),Object(p.jsx)(c.a,{exact:!0,path:"/week12",component:A.WeatherWatch}),Object(p.jsx)(c.a,{exact:!0,path:"/week13",component:A.BookListAPI}),Object(p.jsx)(c.a,{exact:!0,path:"/week14",component:A.Eventful}),Object(p.jsx)(c.a,{exact:!0,path:"/group-project",component:A.RecipeBook}),Object(p.jsx)(c.a,{component:A.NotFound})]})})},q=(n(59),n(60),function(){return Object(p.jsx)("div",{className:"bg-secondary",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(c.c,{children:Object(p.jsx)("div",{className:"w-75 justify-content-center m-auto row bg-dark text-red text-center rounded",children:Object(p.jsx)(c.a,{component:J})})})]})})});s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.7aba38ff.chunk.js.map