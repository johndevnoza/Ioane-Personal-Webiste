interface Skill {
  name: string;
  icon: string;
  id: number;
}

export interface Link {
  name: string;
  icon: string;
  id: number;
  description: string;
  navigate?: string;
}

interface AboutItem {
  name: string;
  icon: string;
  id: number;
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
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "Javascript", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "Tailwind", icon: "test4", id: 5 },
  { name: "Mui/Material", icon: "test4", id: 6 },
  { name: "React Tanstack query", icon: "test4", id: 7 },
  { name: "Tanstack Store", icon: "test4", id: 8 },
  { name: "Next Js", icon: "test4", id: 9 },
  { name: "Git", icon: "test4", id: 10 },
  { name: "Docker", icon: "test4", id: 11 },
  { name: "Postman", icon: "test4", id: 12 },
  { name: "HTTP", icon: "test4", id: 13 },
  { name: "React Context", icon: "test4", id: 14 },
  { name: "Zustand", icon: "test4", id: 15 },
  { name: "JWT", icon: "test4", id: 16 },
  { name: "APIs", icon: "test4", id: 17 },
  { name: "Web performance", icon: "test4", id: 18 },
  { name: "Testing and debugging", icon: "test4", id: 19 },
  { name: "Responsive web design", icon: "test4", id: 20 },
  { name: "Designing skills", icon: "test4", id: 21 },
  { name: "TypeScript", icon: "test4", id: 22 },
];
const linksData: Link[] = [
  {
    name: "Github",
    icon: "test",
    id: 1,
    navigate: "https://github.com/johndevnoza",
    description: "Occasional Contributor",
  },
  {
    name: "Facebook",
    icon: "test3",
    id: 2,
    navigate: "https://www.facebook.com/ioandevnoza/",
    description: "Infrequent Updates",
  },
  {
    name: "Twitter",
    icon: "test2",
    id: 3,
    navigate: "https://twitter.com/john85433490",
    description: "Rarely Tweets",
  },
];
const aboutData: AboutItem[] = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "5", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "aboutttt", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "10", icon: "test4", id: 14 },
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
