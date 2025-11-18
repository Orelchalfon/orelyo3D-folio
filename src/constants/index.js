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
    typescript
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
        title: "FullStack Developer",
        company_name: "RaayenAI (tutiAI)",
        icon: meta,
        iconBg: "#6366f1",
        date: "2025",
        points: [
            "Developed an AI-powered full-stack web application integrating OpenAI for dynamic content generation.",
            "Implemented secure user authentication and subscription plan-based access control using Supabase.",
            "Enabled real-time data processing and seamless RESTful API communication.",
            "Built responsive UI with advanced animations using Framer Motion and TailwindCSS.",
            "Deployed application using modern CI/CD pipelines (Netlify, Vercel, Render).",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/orelchalfon',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/orelchalfon',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'OC Dev Portfolio',
        description: 'Professional portfolio showcasing full-stack development expertise. Built with TypeScript, featuring modern UI/UX and responsive design.',
        link: 'https://github.com/orelchalfon/ocdev',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Place Share',
        description: 'Full-stack application enabling users to share and discover favorite places. Built with MERN stack featuring interactive maps and user authentication.',
        link: 'https://github.com/orelchalfon/place_share',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-yellow',
        name: 'Zentry with Framer Motion',
        description: 'Modern animated web experience showcasing advanced Framer Motion techniques. Features smooth transitions and engaging interactive elements.',
        link: 'https://github.com/orelchalfon/zentry_framer-motion',
    },
    {
        iconUrl: typescript,
        theme: 'btn-back-red',
        name: 'CodeSandbox Clone',
        description: 'TypeScript-based online code editor clone. Implements real-time code execution and collaborative editing features.',
        link: 'https://github.com/orelchalfon/codesandbox-clone',
     }
]; 