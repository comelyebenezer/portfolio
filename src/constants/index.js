import React from 'react'
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import { MdOpenInNew } from "react-icons/md";
import { a } from 'framer-motion/client';


export const HERO_CONTENT = `I'm a detail-oriented Front-End Developer with a strong foundation in Computer Science, passionate about building intuitive and high-performance web applications. Skilled in modern front-end technologies, I focus on creating seamless user experiences with clean, efficient code. Adaptable and always eager to learn, I stay updated with industry trends to deliver innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Front-End Developer",
    company: "NewsBar Communication",
    description: `Developed and maintained responsive user interfaces using React and Tailwind CSS, ensuring cross-browser compatibility and optimal performance. Translated UI/UX designs into interactive web components with clean, maintainable code. Collaborated with backend teams to integrate APIs seamlessly. Utilized GitHub for version control and effective team collaboration.`,
    technologies: ["HTML", "CSS", "React", "Tailwind","GitHub"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer",
    company: "Freelance",
    description: ` Designed, developed, and maintained responsive web applications using JavaScript, HTML, and CSS. Built dynamic user interfaces with Bootstrap, ensuring cross-browser compatibility and optimal performance. Collaborated with cross-functional teams to deliver high-quality products within deadlines. Managed version control and streamlined development workflows using GitHub. `,
    technologies: ["Javascript", "HTML", "CSS", "Bootstrap", "GitHub"],
  },
  {
    year: "2017 - 2020",
    role: "Electrician / Departmental Admin",
    company: "Nairda",
    description: ` Assisted in electrical installations, maintenance, and troubleshooting in a construction environment. Coordinated departmental administrative tasks, including document management and scheduling, using MS Office. Collaborated with engineers to support project planning and execution. Utilized Canva for creating reports and presentations. `,
    technologies: ["Ms Office", "Canva", "Python"],
  },
];

export const EDUCATION = [
  {
    year: "2018 - 2025 (In view)",
    role: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
    company: "Nasarawa State University.",
   

  },

  {
    year: "2022 - 2024",
    role: "PYTHON FOR SOFTWARE ENGINEERING ",
    company: "Udemy.",
   
  },

  {
    year: "2023 - 2024",
    role: "FULL-STACK WEB DEVELOPMENT ",
    company: "Udemy.",
  
  },

  {
    year: "2024 - 2024",
    role: "AI CAREER ESSENTIALS ",
    company: "alx.",
   
  },


];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    projectLinks:  'https://comelyebenezer.github.io/ipunisexsalon/',

  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    projectLinks: 'https://comelyebenezer.github.io/bootstrapweblayout/',

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. ",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    projectLinks:  'https://portfolio-nine-azure-99.vercel.app/',

  },
  {
    title: "Blogging Platform",
    image: project4, 
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Express", "mySQL"],
    projectLinks:  'https://comelyebenezer.github.io/drum-kit/',

  },
];

export const CONTACT = {
  address: "Whole Person Academy Arab Road Kubwa, FCT - Abuja. Postal code - 901002",
  phoneNo: "+2348121156671  +2348133693087 ",
  email: "comely.jr@gmail.com",
};
