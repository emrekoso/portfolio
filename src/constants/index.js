import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am a passionate front-end developer skilled in building robust and scalable web applications. I am more than thrilled to contribute whom I am working with and developed myself at the same time. Front-end side I am working with React and Next.js. I am also very open to learn Back-end side. My goal is, to become expert at front-end side to create innovative solutions that drive business growth and deliver good user experiences.`;

export const ABOUT_TEXT = `I am a dedicated front-end developer. I have worked with a variety of technologies such as; React.js, Next.js, Typescript, Tailwind CSS, Mongo DB. My journey in web development began with seeing really good web sites and questioning and wondering how to the things really work. Later on it has evolved to become web developer where I continuously strive to learn to contribute to something important which people interact with. My main goal is to become expertise at my field and make a significant contribution to people.`;

export const EXPERIENCES = [
  {
    year: "February - April 2024",
    role: "Front-end Developer Intern",
    company: "TEA Networks",
    description: `Worked on React with Typescript. Utilized with lots of libraries, mainly such as; Material UI, DevExtreme, useQuery, Moment.js and etc. I was responsible with bug fixing. Such as; Flow problems in live service, data manipulations, validations, data flows, fetching problems, SSE problems, auth service problems and so on. I developed and created responsive, user friendly with project based designed pages and components for the project. Also implemented REST APIs to connect backend services.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Typescript"],
  },
  {
    year: "June 2023",
    role: "Frontend Developer",
    company: "Freelance",
    description: `I designed and host web sites according to customers' requests. Used JSON, APIs and etc. For the hosting side utilized DaddyGo and BlueHost. When clients needed a back-end I try to fix it by using third party technologies.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    year: "September 2022 - May 2023",
    role: "Translator",
    company: "Dorem Production | DigiTurk",
    description: `I have worked as a subtitler and localizer for DigiTurk. I translated more than over 40 movie and TV series.`,
    technologies: [],
  },
  {
    year: "January 2020 - May 2022",
    role: "AI Correcting",
    company: "DataNOMAD",
    description: `I did transcript in English language to correct AI. I promoted to Quality-Control and corrected other people work to make better AI. Thusby, AI can serve well like as YouTube, Facebook and any other social media platform.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Catchy",
    image: project1,
    description:
      "Web application that similar to Twitter. Build with React.js and typed with SOLID principles.Design side, mainly utilized Material UI, Reactstrap and CSS. We were two as team, project has been build from stratch. I was responsible from Front-end side and my friend was responsible from Back-end side. For prevent component drilling I've choose Redux technology. Sign up and Login pages are protected with Authentication JWTs. Those JWTs are held with Redux and sended to Back-end side.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Bootstrap"],
    inProgress: true,
    platforms: [
      {
        link: "https://google.com",
        icon: "github",
      },
      {
        link: "https://www.youtube.com",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "TicketLayer",
    image: project2,
    description:
      "Web site where you can create tickets for problems and track them whether are they in solving process or done. Build with Next.js, Typescript and Tailwind CSS mainly. Sign up and Login pages are build with Next Authentication. Every ticket and users are held by MongoDB which is used for data base.",
    technologies: ["HTML", "CSS", "Javascript", "Next.js", "Typescript", "MongoDB"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso",
        icon: "github",
      },
      {
        link: "https://www.linkedin.com/in/emre-%C3%A7elik-1115a2257/",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Add2On",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso",
        icon: "github",
      },
      {
        link: "https://www.linkedin.com/in/emre-%C3%A7elik-1115a2257/",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Pecuni Bank Application",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso",
        icon: "github",
      },
      {
        link: "https://www.linkedin.com/in/emre-%C3%A7elik-1115a2257/",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Music Player",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso",
        icon: "github",
      },
      {
        link: "https://www.linkedin.com/in/emre-%C3%A7elik-1115a2257/",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Freelancer",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    inProgress: true,
    platforms: [
      {
        link: "https://google.com",
        icon: "github",
      },
      {
        link: "https://www.youtube.com",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Data Web Site",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    inProgress: true,
    platforms: [
      {
        link: "https://google.com",
        icon: "github",
      },
      {
        link: "https://www.youtube.com",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    inProgress: true,
    platforms: [
      {
        link: "https://google.com",
        icon: "github",
      },
      {
        link: "https://www.youtube.com",
        icon: "externalLink",
      },
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
