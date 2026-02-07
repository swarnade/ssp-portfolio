import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import LeetcodeIcon from "./../public/assets/icons/leetcode.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Devops Engineer",
    icon: <FrontendIcon />,
  },
  {
    title: "Data Science",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Image Processing & ML",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
    {
    title: "Software Engineer Intern",
    company_name: "Philonet AI",
    icon: "/assets/company/philonet-ai.png",
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Present",
    points: [
      "Built a unified news application aggregating content from multiple sources including Google Trends, news websites, and YouTube to deliver real-time and breaking updates.",
      "Developed & optimized core platform features enabling deep, real-time discussions and knowledge-driven social interactions",
      "Developed scalable frontend components and backend services to support conversation rooms, feeds, and user engagement flows",
      "Implemented features to save articles and videos for later reading, enabling personalized news consumption and quick access to trending insights."
    ],
  },
  {
    title: "MERN Developer Intern",
    company_name: "IIT-DELHI",
    icon: "/assets/company/iit-delhi.svg",
    iconBg: "#E6DEDD",
    date: "Dec 2024- Feb 2025",
    points: [
      "Designed and developed a comprehensive LMS using the MERN stack for efficient management and student engagement.",
      "Implemented dynamic user roles, including Admin and SuperAdmin functionality, for streamlined platform control.",
      "Enhanced the platform’s scalability and performance through optimized RESTful API design and responsive UI/UX"
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "DimensionLabs",
    icon: "/assets/company/d-labs.svg",
    iconBg: "#E6DEDD",
    date: "Aug 2023- Feb 2024",
    points: [
      "Developed full-stack applications using React.js, Node.js, Express.js, and MongoDB for dynamic solutions.",
      "Built and optimized full-fledged e-commerce platforms, including product management, secure payment integration",
      "Collaborated with cross-functional teams to design RESTful APIs, enhance UI/UX, and improve site performance"
    ],

  },
];

const testimonials = [
];

const projects = [
  {
    name: "SSP Gemini",
    description:
      "SSP Gemini is an AI-powered chatbot developed using HTML, CSS, JavaScript, and Google Gemini APIs. It provides real-time, context-aware responses, enhancing user engagement through personalized conversational interfaces.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Google Gemini", color: "orange-text-gradient" },
      { name: "Google Cloud", color: "yellow-text-gradient" }
    ],
    image: "/assets/projects/ssp-gemini.png",
    source_code_link: "https://sspgemini.swarnadeepsahapoddar.in/",
    deployed_link: "https://sspgemini.swarnadeepsahapoddar.in/"
  },
  {
    name: "Trip Blueprint",
    description:
      "An intelligent travel planning platform leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js) with Google Maps and Vertex AI for real-time route optimization. It offers personalized itineraries, location-based recommendations, and seamless navigation for a streamlined travel experience.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "Google Maps", color: "yellow-text-gradient" }
    ],
    image: "/assets/projects/trip-blueprint.png",
    source_code_link: "https://github.com/swarnade/trip-blueprint",
    deployed_link: "https://tripblueprint.swarnadeepsahapoddar.in/"
  },
  {
    name: "Virtual Gather",
    description:
      "A real-time virtual meeting platform built with Django (backend), JavaScript (frontend), Agora, and WebRTC for ultra-low latency communication. It features spatial audio, dynamic room management, and seamless peer-to-peer connections for enhanced collaboration.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Agora", color: "pink-text-gradient" },
      { name: "WebRTC", color: "orange-text-gradient" },
      { name: "SQLite", color: "yellow-text-gradient" }
    ],
    image: "/assets/projects/virtual-gather.png",
    source_code_link: "https://github.com/swarnade/virtual-gather",
    deployed_link: "https://virtualgather.swarnadeepsahapoddar.in/"
  },
  {
    "name": "RajRup Travels",
    "description": "RajRup Travels is a tour operator specializing in destinations like Dooars, Sikkim, Darjeeling, Bhutan, Jaldapara, Garumara, Sundarbans, Haridwar, Digha, Vizag-Arakku, Rajasthan, and Puri. They offer comprehensive travel services, including flight and train bookings, ensuring hassle-free reservations at competitive prices.",
    "tags": [
      { "name": "Travel Agency", "color": "blue-text-gradient" },
      { "name": "Tour Operator", "color": "green-text-gradient" },
      { "name": "Booking Services", "color": "pink-text-gradient" }
    ],
    "image": "/assets/projects/rajrup-travels.png",
    "source_code_link": "https://www.rajruptravels.co.in/",
    "deployed_link": "https://www.rajruptravels.co.in/"
  },
  {
    "name": "SIT Photography Club",
    "description": "The SIT Photography Club is a student-run organization at Siliguri Institute of Technology, aiming to explore and capture the talents of SIT through photography. The club encourages students to express their creativity and passion for photography.",
    "tags": [
      { "name": "Photography", "color": "blue-text-gradient" },
      { "name": "Student Club", "color": "green-text-gradient" },
      { "name": "Creative Arts", "color": "pink-text-gradient" }
    ],
    "image": "/assets/projects/sit-photography-club.png",
    "source_code_link": "https://github.com/swarnade/sitphotographyclub",
    "deployed_link": "https://www.sitphotography.club/"
  },
  {
    "name": "ICTDsC 2024",
    "description": "The International Conference on Data Science and Communication (ICTDsC 2024) is organized by the Siliguri Institute of Technology. Scheduled for November 21-22, 2024, the conference aims to bring together academics and professionals to discuss cutting-edge developments in data science and communication. Accepted papers will be published in the Springer book series 'Lecture Notes in Networks and Systems' and are indexed in Scopus, SCImago, and DBLP.",
    "tags": [
      { "name": "Conference", "color": "blue-text-gradient" },
      { "name": "Data Science", "color": "green-text-gradient" },
      { "name": "Communication", "color": "pink-text-gradient" }
    ],
    "image": "/assets/projects/ictdsc-2024.png",
    "source_code_link": "https://github.com/swarnade/ictdsc.in",
    "deployed_link": "https://ictdsc.in/"
  }
];


const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/swarnade",
  },

  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/swarnadeep-saha-poddar",
  },

  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/swarnadeep_saha_poddar",
  },
  {
    id: "Leetcode",
    icon: <LeetcodeIcon />,
    link: "https://www.leetcode.com/swarnadeepsahapoddar",
  },
    {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ssp-philonet",
  },
];

const heroTexts = [
  "Full Stack Developer",
  500,
  "Devops Engineer",
  500,
  "Cloud Developer",
  500,
  "Data Science Enthusiast",
  500,
  "Problem Solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
