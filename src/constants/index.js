import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mimar,
  bytewise,
  sga,
  we,
  netflix,
  linkedin,
  slack,
  threejs,
} from "../assets";

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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ReactJS/Native Developer",
    company_name: "Mimar Studios",
    icon: mimar,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Deep Learning Fellowship",
    company_name: "Bytewise",
    icon: bytewise,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Learning various concepts related to deep learning and implementing them in differeny Tasks and Projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Director Graphics Designing",
    company_name: "Student Government Organization",
    icon: sga,
    iconBg: "#383E56",
    date: "September 2022 - May 2023",
    points: [
      "Designing and Creating Various Graphics and managing Social Media Campaigns.",
      "Collaborating with cross-functional teams including designers, and other creators to create high-quality graphics.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Wonderful Engineering",
    icon: we,
    iconBg: "#E6DEDD",
    date: "September 2022 - December 2022",
    points: ["Creating Informative reels and Videos for Social Media Page."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movies Web App",
    description:
      "Web-based movies app similar to netflix that displays the latest movies in various categories It also includes Firebase Authentication, API Data Fetching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/ShahabAli-1/netflix-clone",
  },
  {
    name: "Social Media App",
    description:
      "Web application similar to Linkedin Built in react that has authentication, data storage, data fetching and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/ShahabAli-1/linkedin-clone",
  },
  {
    name: "Chat Room",
    description:
      "A chatroom web app that has authentication, storage, separate rooms can be created for separate chats and real time communcation.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: slack,
    source_code_link: "https://github.com/ShahabAli-1/Slack-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
