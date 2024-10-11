"use client";
import { motion } from 'framer-motion';
import React from 'react';

// Sample data array for mapping
const articles = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: "https://i.pinimg.com/564x/2c/2e/2b/2c2e2bfc916b9c55c5fd5279eb2ae318.jpg",
    link: "#",
  },
  {
    title: "The Rise of AI in the Tech Industry",
    description: "Artificial Intelligence is transforming industries and creating new opportunities.",
    imageUrl: "https://i.pinimg.com/564x/2c/2e/2b/2c2e2bfc916b9c55c5fd5279eb2ae318.jpg",
    link: "#",
  },
  {
    title: "The Rise of AI in the Tech Industry",
    description: "Artificial Intelligence is transforming industries and creating new opportunities.",
    imageUrl: "https://i.pinimg.com/564x/2c/2e/2b/2c2e2bfc916b9c55c5fd5279eb2ae318.jpg",
    link: "#",
  },
  
];

const Projects: React.FC = () => {
  return (
    <motion.div className='mt-16 px-10'
    >
      <h4 className='font-bold text-4xl text-center sm:text-3xl'> Our Projects</h4>
     
    <div className="flex flex-wrap justify-center gap-10 mt-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="max-w-[400px] bg-white border border-gray-200 rounded-lg dark:border-gray-700 ded-lg shadow-lg dark:bg-gray-800 dark:border-gray -700transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <a href={article.link}>
            <img className="rounded-t-lg" src={article.imageUrl} alt={article.title} />
          </a>
          <div className="p-5">
            <a href={article.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {article.description}
            </p>
            <a
              href={article.link}
              className="inline-flex button items-center button"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
      </div>
    </motion.div>
  );
};

export default Projects;
