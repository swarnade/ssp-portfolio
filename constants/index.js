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
    title: "Full Stack Developer Intern",
    company_name: "Intern at IIT-DELHI",
    icon: "/assets/company/iit-delhi.svg",
    iconBg: "#E6DEDD",
    date: "December 2024 - February 2025",
    points: [
      "Worked a LMS System Using MongoDB , React JS , Node JS , Express JS.",
      "Devloped Dashbaord For Both Employer & Employee.",
      "Developed Various Kind Of Test Series For Students.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Intern at DimensionLabs",
    icon: "/assets/company/d-labs.svg",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Worked on a E-Commerce Website Using React JS & Wordpress",
      "Developed a Dashboard For Owner",
      "Developed a Payment Gateway Using Razorpay",
    ],

  },
];

const testimonials = [
];

const projects = [
  {
    name: "SSP Gemini",
    description:
      "Here is SSP Gemini , An AI ChatBot Develped by Swarnadeep Saha Poddar , Powered By Google Gemini Pro/Pro Vision .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "netlify",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/ssp-gemini.png",
    source_code_link: "https://sspgemini.swarnadeepsahapoddar.in/",
    deployed_link: "https://sspgemini.swarnadeepsahapoddar.in/",
  },
  {
    name: "Trip Blueprint",
    description:
      "Welcome to Trip Blueprint, an AI-powered travel itinerary planner built with React. Trip Blueprint helps you create, customize, and visualize your travel plans seamlessly. By integrating the Gemini API and Google Maps API, it provides real-time data and interactive maps to enhance your travel planning experience. Perfect for travel enthusiasts who want a streamlined and personalized trip planning solution.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "pink-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "orange-text-gradient",
      },
      {
        name: "Netlify",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/trip-blueprint.png",
    source_code_link: "https://github.com/swarnade/trip-blueprint",
    deployed_link: "https://tripblueprint.swarnadeepsahapoddar.in/",
  },
  {
    name: "SIT Photography Club",
    description:
      "Welcome to the SIT Photography Club, your gateway to exploring the world through the lens. Founded in July 2019, our club has grown to be a vibrant community of photography enthusiasts, guided by a shared passion for capturing moments that matter.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Github",
        color: "orange-text-gradient",
      },
      {
        name: "Netlify",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/sit-photography-club.jpeg",
    source_code_link: "https://github.com/sitphotographyclub/website",
    deployed_link: "https://www.sitphotography.club/",
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
