import Techno from './assets/Education/Techno.png';
import Makaut from './assets/Education/Makaut.png';
import Madhyamik from './assets/Education/10th.png';
import Hs from './assets/Education/12th.png';
import Tiit from './assets/Education/Tiit.jpg';

import BootStrapProject from './assets/Projects/BootStrapProject.png';
import Dlinkit from './assets/Projects/Dlinkit.png';
import Laravel_Project from './assets/Projects/Laravel_Project.png';
import Larvel2 from './assets/Projects/Larvel2.png';
import Major from './assets/Projects/Major.png';
import Major2 from './assets/Projects/Major2.png';
import Minor from './assets/Projects/Minor.png';
import Minor2 from './assets/Projects/Minor2.png';
import Php_Project from './assets/Projects/Php_Project.png';
import React_Password_Generator from './assets/Projects/React_Password_Generator.png';
import React_Text_Editor from './assets/Projects/React_Text_Editor.png';
import Woo_Commerce_Project from './assets/Projects/Woo_Commerce_Project.png';
import WordPress_Gallery from './assets/Projects/WordPress_Gallery.png';
// import WordPress_Gallery2 from './assets/Projects/WordPress_Gallery2.png';

import bootstrapLogo from './assets/Skills/bootstrap.png';
import cLogo from './assets/Skills/c.png';
import cssLogo from './assets/Skills/css.png';
import figmaLogo from './assets/Skills/figma.png';
import githubLogo from './assets/Skills/github.png';
import gitLogo from './assets/Skills/Git.png';
import htmlLogo from './assets/Skills/html.png';
import javaLogo from './assets/Skills/java.png';
import javascriptLogo from './assets/Skills/javascript.png';
import Excel from './assets/Skills/msexcel.png';
import PowerPoint from './assets/Skills/mspowerpoint.png';
import Word from './assets/Skills/msWord.png';
import mysqlLogo from './assets/Skills/mysql.png';
import netlifyLogo from './assets/Skills/netlify.png';
import postmanLogo from './assets/Skills/postman.png';
import pythonLogo from './assets/Skills/python.png';
import PhpLogo from './assets/Skills/Php.png';
import LaravelLogo from './assets/Skills/Laravel.png';
import reactjsLogo from './assets/Skills/reactjs.png';
import springbootLogo from './assets/Skills/springboot.png';
import tailwindcssLogo from './assets/Skills/tailwindcss.png';
import vercelLogo from './assets/Skills/vercel.png';
import vscodeLogo from './assets/Skills/vscode.png';


// import Euphoria from './assets/Work/Euphoria-logo-copy.png';
import Euphoria2 from './assets/Work/euphoria_genx_logo.jpg';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Springboot', logo: springbootLogo },
            { name: 'Laravel', logo: LaravelLogo },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'Php', logo: PhpLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
            { name: 'MS Word', logo: Word },
            { name: 'MS Excel', logo: Excel },
            { name: 'MS PowerPoint', logo: PowerPoint },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: Euphoria2,
        role: "Fullstack PHP/Laravel Developer Industrial Training",
        company: "Euphoria GenX",
        date: "September 2024 - March 2025",
        desc: "Completed industrial training as a Full Stack PHP/Laravel Developer, focusing on backend development with MySQL and frontend integration. Gained hands-on experience in building dynamic web applications, managing databases, and working with WordPress for content management and customization.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Laravel",
            "Tailwind CSS",
            "MySQL",
            "WordPress"
        ],
    }

];

export const education = [
    {
        id: 0,
        img: Tiit,
        school: "Techno India Insitiute of Technology, Kolkata",
        date: "Sept 2022 - July 2025",
        grade: "7.63 CGPA",
        desc: "I have completed my Bacheler's degree (BCA) in Computer Applications from Techno India Insititue of Technology undeer MAKAUT University . I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Computer Applications - BCA",
    },
    {
        id: 1,
        img: Hs,
        school: "West Bengal Council of Higher Secondary Education, Kolkata",
        date: "Jully 2020 - March 2022",
        grade: "86%",
        desc: "I completed my class 12 education from Bally Nischinda Chittranjan Vidiyalaya , under the WBCHSE board, where I studied Accountancy, Buisness Studies, and Cost & Tax  with Computer Application.",
        degree: "WBCHSE(XII) - Commerce with Computer Application",
    },
    {
        id: 2,
        img: Madhyamik,
        school: "West Bengal  of  Secondary Education, Kolkata",
        date: "Apr 2019 - March 2020",
        grade: "66%",
        desc: "I completed my class 10 education from Bally Nischinda Chittranjan Vidiyalaya , under the WBBSE board, where I studied Science with Computer.",
        degree: "WBBSE(X)",
    },
];

export const projects = [
    {
        id: 0,
        title: "Tomato (Restaurant Website)",
        description:
            "Tomato is an AI-powered full-stack restaurant and food ordering web app designed with modern architecture and real-world use in mind. Built using React.js (Vite) for the frontend and Spring Boot with JWT-secured APIs on the backend, it features food category filtering, search, price-based sorting, and a Gemini AI chatbot for a smart and seamless user experience. The admin panel includes CRUD capabilities and is protected by role-based access control (RBAC).",
        image: Major,
        tags: ["React.js", "Vite", "Spring Boot", "JWT", "MySQL", "Gemini AI", "Context API", "RBAC"],
        github: "https://github.com/rupam-code/Major_Project",
        webapp: "https://yourdeploymentlink.com"
    },

    {
        id: 1,
        title: "E-Library Bookstore",
        description:
            "A Java-based online bookstore application enabling users to browse, select, and purchase books with a simple cart system and cash-on-delivery option. Admins can easily manage book inventory and orders through a secure dashboard. Built using Advanced Java and Servlet technologies, this project showcases the integration of front-end UI with robust back-end logic.",
        image: Minor,
        tags: ["Advanced Java", "Servlets", "JSP", "JDBC", "MySQL", "HTML", "CSS"],
        github: "https://github.com/codingmastr/E-Library-Bookstore",
        webapp: "",
    },

    {
        id: 2,
        title: "FoodHub",
        description:
            "A dynamic food ordering web application built with PHP and MySQL. FoodHub offers users a smooth shopping experience with features like a shopping cart, secure login, and cash-on-delivery checkout. Admins can manage food items, categories, and orders through a dedicated dashboard. Designed for real-world usability with clean UI and responsive design.",
        image: Php_Project,
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/rupam-code/FoodHub_Php",
        webapp: "",
    },

    {
        id: 3,
        title: "Xofify – Laravel E-Commerce",
        description:
            "ElectroStore is a Laravel-based electronics e-commerce web application featuring a secure authentication system, cart functionality, cash-on-delivery checkout, and a dedicated admin panel. Users can browse and purchase electronics products, while admins manage inventory, categories, and orders through a clean dashboard interface.",
        image: Laravel_Project,
        tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/rupam-code/Xofify_lara",
        webapp: "",
    },

    {
        id: 4,
        title: "Bootstrap Website",
        description:
            "A clean and responsive task reminder web application built using Bootstrap, HTML, and CSS. The app provides a simple interface for users to add, view, and manage daily tasks efficiently. Designed for quick usability and mobile-friendly access.",
        image: BootStrapProject,
        tags: ["Bootstrap", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/rupam-code/bootstrap_example",
        webapp: "https://bootstrap-example-smoky.vercel.app/",
    },

    {
        id: 5,
        title: "Blinkit Frontend Clone",
        description:
            "A responsive frontend clone of the Blinkit grocery delivery platform, built using HTML, CSS, and JavaScript. This project replicates the layout, visuals, and core UI interactions of Blinkit's homepage, offering a clean and modern design for learning and practice purposes.",
        image: Dlinkit,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/rupam-code/Dlinckit",
        webapp: "https://dlinckit.vercel.app/",
    },
    {
        id: 6,
        title: "React Password Generator",
        description:
            "A simple and efficient password generator built with React.js. Users can customize password length, toggle special characters, numbers, and uppercase letters, and instantly copy the generated password. Designed for fast and secure password creation.",
        image: React_Password_Generator,
        tags: ["React JS", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/rupam-code/Passowrd_generator_with_react",
        webapp: "https://passowrd-generator-with-react.vercel.app/",
    },

    {
        id: 7,
        title: "React Text Editor",
        description:
            "A lightweight and functional text editor built using React.js. Users can write, edit, and format text with features like word/character count, uppercase/lowercase conversion, clearing text, and real-time preview. Designed with simplicity and performance in mind.",
        image: React_Text_Editor,
        tags: ["React JS", "Text Utilities", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/rupam-code/Text_website_with_react",
        webapp: "https://text-website-with-react.vercel.app/",
    },
{
        id: 8,
        title: "WooCommerce WordPress Store",
        description:
            "A fully functional eCommerce website built using WordPress and WooCommerce. It features product listings, cart and checkout systems, payment integration, and an admin dashboard for managing products, orders, and users. Designed with performance and a clean user experience in mind.",
        image: Woo_Commerce_Project,
        tags: ["WordPress", "WooCommerce", "PHP", "eCommerce", "HTML", "CSS"],
        github: "",
        webapp: "",
    },
    {
        id: 9,
        title: "Elementor Gallery Website",
        description:
            "A beautifully designed image gallery website built using WordPress and Elementor. Features responsive layouts, dynamic galleries, and a user-friendly interface ideal for photographers, designers, or portfolio showcasing. Powered by Elementor's drag-and-drop builder for easy customization.",
        image: WordPress_Gallery,
        tags: ["WordPress", "Elementor", "Gallery", "HTML", "CSS", "Responsive Design"],
        github: "",
        webapp: "",
    },



];  
