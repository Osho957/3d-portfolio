import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    druva,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    adda,
    paytm
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Druva",
        icon: druva,
        iconBg: "#accbe1",
        date: "Nov 2022 - Current",
        points: [    
            "Developed an automated logic to control backup throttling, enabling scheduled and efficient management of throttling issues, and also reducing the overall cost of COGS by $280 per month.",
            "Achieved a remarkable reduction of up to 80% in manual effort, significantly enhancing overall system reliability and streamlining the backup process.",
            "Successfully migrated over 10,00,000 customers, leading to substantial improvements in backup and restore processes.",
            "Achieved a notable speed boost of up to 30%, contributing to a faster and more efficient backup and restore process to the benefit of customers.",
        ],
    },
    {
        title: "Software Developement Engineer",
        company_name: "Adda247",
        icon: adda,
        iconBg: "#fbc3bc",
        date: "Jun 2022 - Nov 2023",
        points: [
            "Led the successful migration of a set of microservices from version 2.2.6 to the latest version, spring boot 3.1.2.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Spearheaded the development of a comprehensive notification service from inception to execution.",
            "Responsible for delivering personalized invoices and welcome templates to more than 2000 users per day via email and WhatsApp upon course purchases or website signups, enhancing user engagement.",
        ],
    },
    {
        title: "Software Developement Intern",
        company_name: "Paytm",
        icon: paytm,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - May 2023",
        points: [
            "Implemented Delete Rejection Reasons feature on the Paytm OnBoarding engine portal Which Made Analysis Faster By 30%",
            "The Impact of the feature resulted in enhanced record management efficiency and a remarkable 50% reduction in manual effort",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'mailto:osho.personal@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Osho957',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Hotel Rating Backend Application',
        description: 'A microservices application comprising multiple services, each serving distinct use cases, utilizes both SQL and NoSQL databases to manage the rating system for hotels. ',
        link: 'https://github.com/Osho957/HotelRatingApplication',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'BlogSpot',
        description: 'Created a backend application which allows user to create post and search the blogs.',
        link: 'https://github.com/Osho957/Blogging-Backend-Application',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Community',
        description: 'Designed and built a full stack social media application that have all CRUD features.',
        link: 'https://github.com/Osho957/Community',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: '',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Fatafat News',
        description: 'Developed a mobile application for real time news, facilitating to choose and see news with own choice.',
        link: 'https://github.com/Osho957/News_App',
    }
];