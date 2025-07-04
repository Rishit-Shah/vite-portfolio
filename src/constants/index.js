 
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Android App Developer",
      icon: backend,
    },
    {
      title: "GUI Games Builder",
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
        title: "Business Intelligence Engineer Intern",
       company_name: "City of Toronto",
       icon: starbucks,
       iconBg: "#383E56",
       date: "May 2025 - Present",
      points: [
    "Streamline cross-team project execution using Jira",
    "Optimize system performance with data governance and strategic budgeting.",
    "Integrate SAP Analytics Cloud to build interactive BI dashboards.",
    "Enhance insight delivery by 20% over traditional reporting tools.",
 
      
      ],
     },

      
      {
        title: "Research Assistant",
       company_name: "York University (Lassonde School of Engineering)",
       icon: meta,
       iconBg: "#383E56",
       date: "Sept 2023 - Present",
      points: [
    "Researching on various adaptations of Stable Matching Problem to identify new applications and refine approaches.",
    "Collaborating with the professor to scale up and enhance the process using Gale-Shapley algorithm and discrete mathematics (probability theories).",
    "Developing an optimized Algorithm improving efficiency by implementing advanced data structures techniques.",
    "Applying theoretical methodologies to support and validate the algorithm's robustness.",
 
      
      ],
     },

      {
        title: "Program Department Assistant",
       company_name: "School of Continuing Studies- York University",
       icon: shopify,
       iconBg: "#383E56",
       date: "June 2024 - April 2025",
      points: [
    "Efficiently managing and coordinating recruitment data for the department, ensuring accuracy and accessibility of agent and institution information from the database.",
    "Developing dynamic data charts and visualizations to effectively present the information, facilitating clear and actionable insights.",
    "Streamlining data management by integrating Python automated scripts for Excel and Salesforce.",
 
      
      ],
     },


     {

     

       
       title: "LMS Support Assistant",
       company_name: "York University (Faculty of Education)",
       icon: meta,
       iconBg: "#383E56",
       date: "Sept 2023 - Apr 2024",
      points: [
    "Develop and implement intuitive UI/UX designs for course layouts and modules at York University's Department of Education, utilizing HTML and CSS to enhance online learning experiences.",
    "Organize Moodle courses to ensure compliance with procedures and create an optimal learning environment.",
    "Collaborate with students and professors to improve navigation and support on the eClass portal.",
    " Expertly troubleshoot and resolve issues related to the course management system's status and database",
      
      ],
     },


      
    {

     

       
       title: "Bookstore Distribution and Customer Support Assistant",
       company_name: "York University",
       icon: meta,
       iconBg: "#383E56",
       date: "Aug 2023 - Sept 2023",
      points: [
          "Managed online and in-store book orders, providing diverse customer assistance.",
          "Oversaw administrative tasks, inventory supervision, and ensured operational efficiency.",
          "Maintained accurate financial records for rental and new books in a library setting.",
          "Conducted regular bookshelf maintenance, organizing by author and publication dates to optimize accessibility.",






      
      
      ],
     },
 
    {
      title: "Team Lead",
      company_name: "UNhack Hackathon 2022",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept-2022",
      points: [
        "Collaborated and planned out the ideas on the various sources of the topics for Sustainable Development.",
        "Researched and jotted down multiple methods along with actions and steps to prevent the problem roots. ",
        "Explored and analyzed one such sustainable development issue based on wastage of construction materials.",
        "Provided possible solutions and suggestions on storage and reusage of the left-out materials.",
      ],
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
      name: "Snake Game",
      description:
        "Graphical user interface-based platform that allows users to play, free-roam and record their scores on screen, providing a convenient and straightforward game to play and also useful in developing software skills for one's need.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "GUI",
          color: "green-text-gradient",
        },
        {
          name: "game",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rishit-Shah/SNAKE-GAME.git",
    },
    {
      name: "Trading Buddy",
      description:
        " A traditional website that helps user to keep record of various price change, volume, list of their shares from stock-market. Besides our provided user-guide eanbles users to start with the trading system and its fundamental rules. ",
      tags: [
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rishit-Shah/Traddingbuddy.git",
    },
    {
      name: "Quiz App",
      description:
        "A comprehensive android application for users to play and explore on their mobile devices. It allows user to answer multiple questions with yes and no, then finally recieve the total core at the end of each quiz section.",
      tags: [
        {
          name: "android",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "app",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
