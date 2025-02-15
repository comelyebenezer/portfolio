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
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", 
    ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const EDUCATION = [
  {
    year: "2018 - 2025 (In view)",
    role: "BACHELOR OF SCIENCE IN COPUTER SCIENCE",
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
    year: "2023 - 2024",
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
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. ",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4, 
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Whole Person Academy Arab Road Kubwa, FCT - Abuja. Postal code - 901002",
  phoneNo: "+2348121156671  +2348133693087 ",
  email: "comely.jr@gmail.com",
};
