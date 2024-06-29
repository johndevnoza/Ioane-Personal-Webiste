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

export interface Skill {
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

export interface NavLink {
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
    context:
      "Short overview. In my journey towards becoming a proficient and dedicated frontend professional, my focus is squarely on web development, specifically JavaScript and React ⚛️. I've channeled my dedication and creative mindset into crafting captivating and interactive web experiences.",
    id: 2,
  },
  {
    context:
      "Programing Graduation. I successfully completed the React frontend course at DIGITAL INSTITUTE. During this course, I gained comprehensive knowledge of JavaScript and various related technologies essential for a junior React developer. The program was thorough and well-structured, equipping me with the skills needed to excel in the field. Additionally, I had the privilege of learning from an exceptional instructor, which greatly enhanced my understanding and confidence.",
    id: 3,
  },
  {
    context:
      "Why me? Having mastered various creative domains, I bring a unique perspective to frontend development. My commitment to quality, punctuality, and a creative approach remains unwavering. I'm excited about this transition and eager to collaborate on exciting web projects.",
    id: 4,
  },
  {
    context:
      "Opening statement. A message.If you're seeking a frontend developer with a creative twist and a knack for crafting engaging user experiences, let's connect! Together, we can build web solutions that resonate with users 🤝 and drive tangible results 📈.",
    id: 5,
  },
];
const beforeWebDev: AboutTypes[] = [
  {
    context: "From a young age, I have always loved art.",
    id: 1,
  },
  {
    context:
      "Art Graduation. At age 15, I enrolled in Barakoni College on my brother's recommendation. There, I learned graphic design, Photoshop, Illustrator, motion graphics with After Effects, and 3D modeling with 3ds Max.",
    id: 2,
  },
  {
    context:
      "After graduating from college, I started working at Sarke Studio, a Georgian international film production company that has been operating for over two decades. Sarke Studio encompasses many subsidiary companies, each with diverse creative projects, giving me the opportunity to work and learn from them.",
    id: 3,
  },
  {
    context:
      "Work background. I began as a 3D modeler at WE SCAN GEORGIA within Sarke Studio. Later, I shifted my profession to 2D animation at another Sarke subsidiary, HOLLOSEUM. After my time at HOLLOSEUM, I moved to a new company called NEW LAYER as a 2D animator. Following several projects there, I transitioned to freelancing.",
    id: 4,
  },
  {
    context:
      "About WeScanGeorgia. At WE SCAN GEORGIA, I simultaneously took on three roles: photoshooting and 3D scanning, 3D modeling, and texturing. The company was dedicated to scanning the entire old city of Tbilisi to create the most realistic 3D model possible. This project aimed to enable virtual reality tours of historic Tbilisi. My responsibility was to go to specific locations in old Tbilisi, which could be a particular house or any significant site, and capture photographs from all possible angles. These photos were then uploaded into the 3D scanning software, RealityCapture, to create a 3D scan of the area. As a 3D modeler, I would then refine and enhance the scan to make it as realistic as possible. Additionally, I would create textures in Substance Painter to ensure high-quality, lifelike details.",
    id: 5,
  },
  {
    context:
      "About Holloseum. At HOLLOSEUM, a subsidiary of Sarke Studio was a Projection mapping company, we brought to life the magnificent paintings of old masters such as Pirosmani, Van Gogh, and others. This involved animating 2D paintings and narrating their stories on a grand stage. HOLLOSEUM was a museum equipped with numerous projectors, allowing visitors to view our animations directly.\n\nI served as the lead animator, but my responsibilities extended beyond animation. To bring the paintings to life, I first had to perform retouching in Photoshop to separate the elements of the paintings into individual layers. I also needed to fill in any empty spaces, painting in the same style as the original artwork so that viewers couldn't detect any changes. This required not only animation skills but also artistic ability. Finally, I composited everything together in After Effects to create the final animations.",
    id: 6,
  },
  {
    context:
      'About NewLayer. After completing various projects for subsidiary companies, which provided us with extensive experience in large and creative endeavors as well as teamwork, my colleagues and I decided to create our own company named "New Layer." Thanks to our collective experience and impressive portfolio, we quickly secured our next client for an upcoming project.\n\nThe company Borjomi commissioned us to create a projection mapping for their anniversary celebration in Borjomi. We traveled to Borjomi and crafted a stunning animation projected onto a large, historic building in the city. The project was a testament to our skills and creativity, showcasing our ability to deliver exceptional work.',
    id: 7,
  },
  {
    context:
      "Finnaly Freelancing. After these projects, due to my extensive experience across various professional fields, I decided to start freelancing, influenced by a colleague. Despite already having skills as an artist, animator, and motion graphics designer, working with clients and understanding the market led me to explore a new profession as an NFT artist. I created NFT collections primarily in the pixel art style for clients on Upwork and Fiverr. This new venture was both creative and lucrative for me.",
    id: 8,
  },
];
const personalLife: AboutTypes[] = [
  {
    context: "From Tbilisi Georgia.",
    id: 1,
  },
  {
    context:
      "Family : I am fortunate to be rich in family, with 5 brothers and 4 sisters. I am also a father, blessed with a lovely wife.",
    id: 2,
  },
  {
    context:
      "Hobbies : In my free time, I love to watch fighting sports such as MMA, UFC, and boxing. I also enjoy working out, drawing, writing movie and TV series scripts, and traveling.",
    id: 3,
  },
  {
    context:
      "Goals : As a father and a citizen of Georgia, I feel a deep responsibility to provide the best for my family and contribute positively to my country. My primary focus now is to enhance my programming skills, enabling me to develop projects that can benefit and inspire people. Additionally, I aim to achieve financial stability and fulfill all my responsibilities towards my family while pursuing my dreams.",
    id: 4,
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
      descTitle: "Ioane Devnozashvili",
      paragraph: personalLife,
    },
  },
];
const contactData: ContactItem[] = [
  { name: "Your Email", icon: "test", id: 1 },
  { name: "Subject", icon: "test3", id: 2 },
  { name: "message", icon: "test2", id: 3 },
  { name: "Click", icon: "test1", id: 4 },
];

const navLinks: NavLink[] = [
  { title: "Skills", link: "skills", id: 1, data: skillsData },
  { title: "Links", link: "social-media", id: 2, data: linksData },
  { title: "About", link: "about", id: 3, data: aboutData },
  { title: "Contact", link: "contact", id: 4, data: contactData },
  { title: "Game", link: "game", id: 5, data: contactData },
];

export default navLinks;
