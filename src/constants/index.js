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
    mafoody,
    scale,
    boy,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        title: "Recipe Recommendation App",
        company_name: "React Native, Django, MySQL",
        icon: mafoody,
        iconBg: "#E6DEDD",
        date: "Jen 2023 - Aug 2023",
        points: [
            "Data gathering using self-coded python scraper.",
            "Data cleaning and processing using one-hot, jieba, nlp, and sample tagging. DSSM and Bert Model trainning.",
            "Developing mobile application using React Native and Django frameworks. Integrating model into system.",
            "Implementing responsive design and ensuring cross-platform compatibility.",
        ],
    },
    {
        title: "Portfolio Website",
        company_name: "React.js, Java, MySQL",
        icon: scale,
        iconBg: "#383E56",
        date: "Sep 2023 - Feb 2025",
        points: [
            "Developing web applications using React.js and Java.",
            "Using Figma for interface desing and lottie animation generation.",
            "Design and implementing file reading format and storing logic.",
            "Implementing responsive design and integrating lottie.json animation.",
        ],
    },
    {
        title: "2D Pixel Game",
        company_name: "Java",
        icon: boy,
        iconBg: "#E6DEDD",
        date: "Jan 2025 - Feb 2025",
        points: [
            "Develop a 2D pixel style RPG game using Java.",
            "Charactors, npcs, monsters, maps, etc design and audio picking.",
            "Implementing game logic, GUI rendering, and sound effect playing.",
        ],
    },
    {
        title: "3D Interactive Portfolio",
        company_name: "React.js, Three.js, Github Action",
        icon: web,
        iconBg: "#383E56",
        date: "Feb 2025 - Present",
        points: [
            "Developing 3D web applications using React.js and Three.js.",
            "Delivering CI/CD develop process using Github Action. And using git for version control.",
            "Learning tailwindcss and implementing the learning result in the project.",
            "Implementing responsive design and integrating Three.js 3D model into the web application."
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };