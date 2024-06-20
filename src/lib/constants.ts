import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiTestinglibrary,
  SiJsonwebtokens,
  SiReactquery,
  SiAiohttp,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { TbApi } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
import { AiFillFileUnknown } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: IconType;
  id: number;
}

export interface Link {
  name: string;
  icon: IconType;
  id: number;
  description: string;
  navigate?: string;
}

interface ContactItem {
  name: string;
  icon: string;
  id: number;
}

interface NavLink {
  title: string;
  link: string;
  id: number;
  data: Skill[] | Link[] | AboutItem[] | ContactItem[];
}

const skillsData: Skill[] = [
  {
    name: "html",
    icon: FaHtml5,
    id: 1,
  },
  {
    name: "ccss",
    icon: FaCss3Alt,
    id: 2,
  },
  {
    name: "Javascript",
    icon: FaJs,
    id: 3,
  },
  {
    name: "react",
    icon: FaReact,
    id: 4,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    id: 5,
  },
  {
    name: "Mui/Material",
    icon: AiFillFileUnknown,
    id: 6,
  },
  {
    name: "React Tanstack query",
    icon: SiReactquery,
    id: 7,
  },
  {
    name: "Tanstack Store",
    icon: SiReactquery,
    id: 8,
  },
  {
    name: "Next Js",
    icon: RiNextjsFill,
    id: 9,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    id: 10,
  },
  {
    name: "Docker",
    icon: FaDocker,
    id: 11,
  },
  {
    name: "Postman",
    icon: SiPostman,
    id: 12,
  },
  {
    name: "HTTP",
    icon: SiAiohttp,
    id: 13,
  },
  {
    name: "React Context",
    icon: FaReact,
    id: 14,
  },
  {
    name: "Zustand",
    icon: AiFillFileUnknown,
    id: 15,
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    id: 16,
  },
  {
    name: "APIs",
    icon: TbApi,
    id: 17,
  },
  {
    name: "Web performance",
    icon: CgPerformance,
    id: 18,
  },
  {
    name: "Testing and debugging",
    icon: SiTestinglibrary,
    id: 19,
  },
  {
    name: "Responsive web design",
    icon: DiResponsive,
    id: 20,
  },
  {
    name: "Designing skills",
    icon: MdDesignServices,
    id: 21,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    id: 22,
  },
];

const linksData: Link[] = [
  {
    name: "Github",
    icon: FaGithub,
    id: 1,
    navigate: "https://github.com/johndevnoza",
    description: "Occasional Contributor",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    id: 2,
    navigate: "https://www.facebook.com/ioandevnoza/",
    description: "Infrequent Updates",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    id: 3,
    navigate: "https://twitter.com/john85433490",
    description: "Rarely Tweets",
  },
];
type AboutTypes = {
  context: string;
  id: number;
};

const aboutWebDev: AboutTypes[] = [
  {
    context: "🚀⚛️ Frontend Developer with a Passion for Creative Solutions 🎨",
    id: 1,
  },
  {
    context: "🚀⚛️ assion for Creative Solutions 🎨",
    id: 2,
  },
  {
    context: "🚀⚛️ Frontend Developer with a PassSolutions 🎨",
    id: 3,
  },
];
const beforeWebDev: AboutTypes[] = [
  {
    context: "artist bliad",
    id: 1,
  },
  {
    context: "🚀⚛️ assion for Creative Solutions 🎨",
    id: 2,
  },
  {
    context:
      "🚀⚛️ Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutionsFrontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutionsFrontend Developer with a PassSolutionsFrontend Developer with a PassSolutionsFrontend Developer with 🎨",
    id: 3,
  },
  {
    context:
      "🚀⚛️ Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutionsFrontend Developer with a PassSolutions Frontend Developer with a PassSolutions Frontend Developer with a PassSolutionsFrontend Developer with a PassSolutionsFrontend Developer with a PassSolutionsFrontend Developer with 🎨",
    id: 4,
  },
  {
    context: "🚀⚛️ Frontend Developer with a PassSolutions 🎨",
    id: 5,
  },
  {
    context: "🚀⚛️ Frontend Developer with a PassSolutions 🎨",
    id: 6,
  },
];
const personalLife: AboutTypes[] = [
  {
    context: "shegarkvevt yvelas",
    id: 1,
  },
  {
    context: "🚀⚛️ assion for Creative Solutions 🎨",
    id: 2,
  },
  {
    context: "🚀⚛️ Frontend Developer with a PassSolutions 🎨",
    id: 3,
  },
];

interface Description {
  descTitle: string;
  paragraph: AboutTypes[];
}

export interface AboutItem {
  name: string;
  icon: IconType | string;
  description: Description;
  id: number;
}

const aboutData: AboutItem[] = [
  {
    name: "Web development",
    icon: FaSquareWebAwesomeStroke,
    id: 1,
    description: {
      descTitle: "React Js Developer",
      paragraph: aboutWebDev,
    },
  },
  {
    name: "Before Web development",
    icon: BiSolidSkipPreviousCircle,
    id: 2,
    description: {
      descTitle: "Artist, Animator, 3D modeler",
      paragraph: beforeWebDev,
    },
  },
  {
    name: "Personal Life",
    icon: IoPersonCircle,
    id: 3,
    description: {
      descTitle: "Ioane Devnozashvili, Tbilisi Georgia",
      paragraph: personalLife,
    },
  },
];
const contactData: ContactItem[] = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "asssssssssss", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "10", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "contacttt", icon: "test4", id: 14 },
  { name: "10", icon: "test4", id: 15 },
  { name: "10", icon: "test4", id: 16 },
  { name: "10", icon: "test4", id: 17 },
  { name: "10", icon: "test4", id: 18 },
  { name: "10", icon: "test4", id: 19 },
  { name: "10", icon: "test4", id: 20 },
  { name: "10", icon: "test4", id: 21 },
  { name: "10", icon: "test4", id: 22 },
  { name: "10", icon: "test4", id: 23 },
  { name: "10", icon: "test4", id: 24 },
];

const navLinks: NavLink[] = [
  { title: "Skills", link: "skills", id: 1, data: skillsData },
  { title: "Links", link: "social-media", id: 2, data: linksData },
  { title: "About", link: "about", id: 3, data: aboutData },
  { title: "Contact", link: "contact", id: 4, data: contactData },
];

export default navLinks;
