import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import projectFreelancer from "../assets/projects/projectFreelancer.png";
import soon from "../assets/projects/comingSoon.svg";


export const HERO_CONTENT = `I am a passionate front-end developer skilled in building robust and scalable web applications. I am more than thrilled to contribute whom I am working with and developed myself at the same time. Front-end side I am working with React and Next.js. I am also very open to learn Back-end side. My goal is to become expert at front-end side to create innovative solutions that drive business growth and deliver good user experiences.`;

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
    image: soon,
    description:
      "Web application that similar to Twitter. Build with React.js and typed with SOLID principles.Design side, mainly utilized Material UI, Reactstrap and CSS. We were two as team, project has been build from stratch. I was responsible from Front-end side and my friend was responsible from Back-end side. For prevent component drilling I've choose Redux technology. Sign up and Login pages are protected with Authentication JWTs. Those JWTs are held with Redux and sended to Back-end side.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Bootstrap"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/mucahittanacioglu/Catchy",
        icon: "github",
      },
      {
        link: "",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "TicketLayer",
    image: soon,
    description:
      "Web site where you can create tickets for problems and track them whether are they in solving process or done. Build with Next.js, Typescript and Tailwind CSS mainly. Sign up and Login pages are build with Next Authentication. Every ticket and users are held by MongoDB which is used for data base.",
    technologies: ["HTML", "CSS", "Javascript", "Next.js", "Typescript", "MongoDB"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso/ticket-app",
        icon: "github",
      },
      {
        link: "",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Add2On",
    image: soon,
    description:
      "Web site that similar to Miro. Build with React.js and Typescript. Design utilized with mainly Tailwind CSS and Shadcn for components. It is Full-stack project, so Back-end side solved with Convex Dev. Convex also used for data base storage on this project. Sign up-Login pages and Authentication made with Clerk.",
    technologies: ["HTML", "CSS", "Javascript", "Next.js", "Typescript", "Convex", "Clerk"],
    inProgress: true,
    platforms: [
      {
        link: "https://github.com/emrekoso/add2on",
        icon: "github",
      },
      {
        link: "",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Pecuni Bank Application",
    image: soon,
    description:
      "Banking application...",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    inProgress: true,
    platforms: [
      {
        link: "https://github.com/emrekoso/pecun_bank",
        icon: "github",
      },
      {
        link: "",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Music Player",
    image: soon,
    description:
      "Music application with shuffle and loop function. Build with vanilla Javascript, HTML and CSS.",
    technologies: ["HTML", "CSS", "Javascript"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso/Music_Player",
        icon: "github",
      },
      {
        link: "",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Freelancer",
    image: projectFreelancer,
    description:
      "Professional looking freelancer web site. Build with vanilla Javascript, HTML and SCSS.",
    technologies: ["HTML", "SCSS", "Javascript"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso/Freelancer",
        icon: "github",
      },
      {
        link: "https://6463b49cabafcb05846c7fba--kaleidoscopic-pithivier-da1157.netlify.app/",
        icon: "externalLink",
      },
    ],
  },
  {
    title: "Data Web Site",
    image: soon,
    description:
      "Basic good looking web site to learn Tailwind CSS.",
    technologies: ["HTML", "CSS", "Javascript", "Typescript", "Tailwind CSS",],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso/DataWebsite",
        icon: "github",
      },
      {
        link: "",
        icon: "",
      },
    ],
  },
  {
    title: "E-Commerce Website",
    image: soon,
    description:
      "One of the basic and very first web site of mine. Build with basic HTML and CSS.",
    technologies: ["HTML", "CSS"],
    inProgress: false,
    platforms: [
      {
        link: "https://github.com/emrekoso/E-Commerce-Web-Site",
        icon: "github",
      },
      {
        link: "",
        icon: "",
      },
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
