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
    company: "NewsBar Communication - Abuja (Nigeria)",
    description: `Developed and maintained responsive user interfaces using React and Tailwind CSS, ensuring cross-browser compatibility and optimal performance. Translated UI/UX designs into interactive web components with clean, maintainable code. Collaborated with backend teams to integrate APIs seamlessly. Utilized GitHub for version control and effective team collaboration.`,
    technologies: ["HTML", "CSS", "React", "Tailwind","GitHub"],
  },
  {
    year: "2021 - 2022",
    role: "Intern - Web Developer",
    company: "NewsBar Communication - Abuja (Nigeria)",
    description: ` Designed, developed, and maintained responsive web applications using JavaScript, HTML, and CSS. Built dynamic user interfaces with Bootstrap, ensuring cross-browser compatibility and optimal performance. Collaborated with cross-functional teams to deliver high-quality products within deadlines. Managed version control and streamlined development workflows using GitHub. `,
    technologies: ["Javascript", "HTML", "CSS", "Bootstrap", "GitHub"],
  },
  {
    year: "2017 - 2020",
    role: "Electrician / Departmental Admin ",
    company: "Nairda - Abuja (Nigeria)",
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
    title: "Cyber Truck Website ",
    image: project2,
    description:
      "I built and deployed a full-stack Cyber Truck website using React to deliver a dynamic and responsive UI. I utilized Tailwind CSS for modern and efficient styling, implemented Drizzle ORM for streamlined database management and queries, and integrated Clerk for secure authentication and user management. Additionally, I ensured optimal performance and scalability by applying best development practices.",
    technologies: ["HTML", "CSS", "Javascript", "React", "PostgreSQL"],
    projectLinks: 'https://carsite-cybertruck.vercel.app/',

  },
  {
    title: "Quick-Pad Web App ",
    image: project3,
    description:
      "I built Quick-Pad using React to provide a fast and interactive user experience. I designed a responsive interface suitable for both desktop and mobile users. To manage state and navigation efficiently, I utilized React hooks and React Router. Additionally, I optimized performance and ensured cross-browser compatibility for a seamless user experience. ",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    projectLinks:  'https://quickpad.netlify.app/',

  },
  {
    title: "Unisex Salon Website ",
    image: project4, 
    description:
      "I designed and developed a responsive website for a unisex salon to enhance online visibility and customer engagement. I implemented modern UI/UX design principles using HTML, CSS, and JavaScript, ensuring a seamless user experience. The website includes features such as service listings, contact forms, and location details to improve customer interaction. I ensured cross-browser compatibility and mobile responsiveness for optimal performance on various devices. Additionally, I optimized website speed and accessibility, enhancing user satisfaction and retention..",
    technologies: ["HTML", "CSS", "Javascript"],
    projectLinks:  'https://comelyebenezer.github.io/ipunisexsalon/',

  },
];

export const CONTACT = {
  address: "Whole Person Academy Arab Road Kubwa, FCT - Abuja. Postal code - 901002",
  phoneNo: "+2348121156671  +2348133693087 ",
  email: "comely.jr@gmail.com",
};
