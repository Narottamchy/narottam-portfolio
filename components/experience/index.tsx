import React from "react";

const experiences = [
    {
      title: "Backend Developer",
      company: "Dappunk",
      duration: "May 2024 - present",
      description: "Developed and maintained backend services for various projects,",
      skills: ["NextJS", "MariaDB", "NodeJS", "JavaScript","NestJS","TypeORM","MongoDB","Docker","AWS","Shadcn/UI"],
      logo: "/images/dappunk-icon.png" ,
      projects: [
        {
          name: 'Dappunk - A platform for buying and selling digital art and Content.',
          link: 'https://dappunk.com/',
        },
      ],
    },
    {
      title: "Senior Software Engineer (SSE)",
      company: "Growth Metaverse Private Limited",
      duration: "December 2023 - july-2024",
      description: "As Enhanced scalability by 50%, improved performance by 35%, and reduced load times by 40% across various projects using AWS, MERN stack, and Next.js 14.",
      skills: ["NextJS", "ReactJS","Javascript","PostgreSQL","MongoDB","Prisma","AWS","MySQL","Docker","Typescript","Shadcn/UI"],
      logo: "/images/growth.png",
      projects: [
        {
          name: 'JadeCaps - A platform for real estate agents to manage their properties and clients.',
          link: 'https://www.jadecaps.com/',
        },
        {
          name: 'ITReturn Bharosa - A platform for tax professionals to manage their clients and tax returns.',
          link: 'https://www.itreturnbharo.com/',
        },
        {
          name: 'CityNect - A platform for finding flat and flatmates in your city.',
          link: 'https://citynect.in/',
        },
      ],
    },
    {
      title: "Software Engineer (SE)",
      company: "ThinkRoman Ventures  LLP ",
      duration: "August 2022 - December 2022",
      description: "Led end-to-end development, optimizing website functionality and improving performance by migrating to Next.js 14.,",
      skills: ["NextJS", "ReactJS", "TailwindCss", "Shadcn/UI", "Javascript","Sanity.io","PostgreSQL","MongoDB","Prisma","Typescript"],
      logo: "/images/thinkroman.png",
      projects: [
        {
          name: 'TrCare - A platform for healthcare professionals to manage their patients and appointments.',
          link: 'https://trcare.ai/',
        },
        {
          name: 'ThinkRoman Academy - A platform for learning, teaching and sharing knowledge.',
          link: 'https://academy.thinkroman.com/',
        },
      ],
    },
  ];
  
  export default function WorkExperience() {
    return (
      <div id="experience" className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-4 text-center">Experience</h1>
        <p className="text-lg sm:text-xl mb-8 text-center">My Work Experience as a Software Developer</p>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 sm:p-6 mb-6 bg-gray-800 hover:scale-105 hover:shadow-2xl dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-500">{exp.title}</h2>
                <p className="text-sm sm:text-base">{exp.company}</p>
                <p className="text-sm sm:text-base">{exp.duration}</p>
              </div>
            </div>
            <p className="mt-4 text-base sm:text-lg">{exp.description}</p>
            <div className="mt-4">
              <span className="font-bold text-orange-400">Skills: </span>
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="text-lime-300 ml-2">
                  {skill}
                  {idx < exp.skills.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-200">Projects:</h3>
              <ul className="list-disc pl-5 text-gray-300 mt-2">
                {exp.projects.map((project, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  