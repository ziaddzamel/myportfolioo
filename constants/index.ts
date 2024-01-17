import {
  javascript,
  typescript,
  html,
  chakra,
  next,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  Gpt3,
  snapgram,
  threejs,
  bookmark,
  Travel,
  Todo,
} from "../public";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "chakra ui",
    icon: chakra,
  },
  {
    name: "next.js",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Snapgram",
    description:
      "Snapgram is a dynamic and engaging social media platform designed for seamless content sharing and connection",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "Chakra-Ui",
        color: "blue-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/ziaddzamel/snapgramee",
    Live_demo_link: "https://snapgrame.vercel.app/signIn",
  },

  {
    name: "GPT-3",
    description:
      "A Modern website where you can know more about GPT-3, about the future. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra Ui",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: Gpt3,
    source_code_link: "https://github.com/ziaddzamel/GPT3-LandingPage",
    Live_demo_link: "https://modernuiuxgpt3page.netlify.app/",
  },
  {
    name: "Travel",
    description: "A  Modern UI/UX traveling and camping Website ",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: " TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: Travel,
    source_code_link: "https://github.com/ziaddzamel/Travel_ui_ux-WebSite",
    Live_demo_link: "https://traveluiux.netlify.app/",
  },
  {
    name: "TodoApp",
    description:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop . ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "vanila javascript",
        color: "orange-text-gradient",
      },
    ],
    image: Todo,
    source_code_link: "https://github.com/ziaddzamel/Todo-App-Main",
    Live_demo_link: "https://ziaddzamel.github.io/Todo-App-Main/#",
  },
  {
    name: "BookMark",
    description:
      "Bookmark landing page with a clean and a simple interface to organize your websites . ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "vanila javascript",
        color: "orange-text-gradient",
      },
    ],
    image: bookmark,
    source_code_link:
      " https://github.com/ziaddzamel/bookmark-landing-page-master",
    Live_demo_link:
      "https://ziaddzamel.github.io/bookmark-landing-page-master/  ",
  },
];

export { technologies, projects };
