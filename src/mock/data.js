import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alvaro Argañaraz | Front End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alvaro Argañaraz',
  subtitle: "I'm a Front End Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi! I'm Alvaro Argañaraz, a Front End developer. I love learning new technologies and facing challenges to grow and improve.",
  paragraphTwo: "My skills include HTML5, CSS3, Bootstrap 4, SASS, Javascript ES6+, React.js Hooks, Redux, Jquery, Git, and more.",
  paragraphThree: "I studied engineering and management, which helped me gain soft skills and experience, which add to my skills as a developer. You can read more about my studies, skills, experiences and education in my resume below.",
  resume: 'https://drive.google.com/file/d/1JTvsI-BRaoQYPKGWfzO2hnJQF6UQf_x7/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ReactMovies.JPG',
    title: 'React Movies',
    info: 'This is a Movie App that shows info about all movies!',
    info2: 'It was made using React Hooks and Styled Components.',
    url: 'https://awesome-react-movies.netlify.app/',
    repo: 'https://github.com/arganarazalvaro/react-movies', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'Recipe.JPG',
    title: 'Recipe Finder',
    info: 'This is a web application that will help you find the best recipes! ',
    info2: 'It was done using React and Edaman´s API.',
    url: 'https://amazing-recipe.netlify.app/',
    repo: 'https://github.com/arganarazalvaro/recipes-aplication', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Consultora.JPG',
    title: 'Argañaraz Consultores',
    info: 'This is a website for a business consulting company. ',
    info2: 'It was made with HTML5, CSS3 and JavaScript.',
    url: 'https://arganarazalvaro.github.io/consultoraarganaraz/',
    repo: 'https://github.com/arganarazalvaro/consultoraarganaraz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'arganarazalvaro@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alvaro-arganaraz/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arganarazalvaro/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/AlvaroArganaraz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
