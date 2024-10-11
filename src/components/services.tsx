"use client";

import React from 'react';

export const card = [
  {
    title: "Need help with a claim?",
    description: "Follow our step-by-step guideline process on how to certify your weekly benefits.",
    iconPath: "M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z",
  },
  {
    title: "Looking for more info?",
    description: "Check out our FAQ section for more details on how we can assist you.",
    iconPath: "M9 12l-3-3h6l-3 3Zm-1.8-6.8C6.486 5.2 6.2 4.686 6.2 4.2S6.486 3.2 7 3.2s.8.486.8 1.2c0 .686-.286 1.2-.8 1.2Z",
  },
  {
    title: "Need technical support?",
    description: "Our support team is here 24/7 to help you with any issues you may face.",
    iconPath: "M15 2a3 3 0 0 1 3 3v7.5A3.5 3.5 0 0 1 14.5 16H7.879l-4.293 4.293A1 1 0 0 1 2 19V16.121A3.5 3.5 0 0 1 0 12.5V5a3 3 0 0 1 3-3h12Z",
  },
  {
    title: "Need help with a claim?",
    description: "Follow our step-by-step guideline process on how to certify your weekly benefits.",
    iconPath: "M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z",
  },
  {
    title: "Looking for more info?",
    description: "Check out our FAQ section for more details on how we can assist you.",
    iconPath: "M9 12l-3-3h6l-3 3Zm-1.8-6.8C6.486 5.2 6.2 4.686 6.2 4.2S6.486 3.2 7 3.2s.8.486.8 1.2c0 .686-.286 1.2-.8 1.2Z",
  },
  {
    title: "Need technical support?",
    description: "Our support team is here 24/7 to help you with any issues you may face.",
    iconPath: "M15 2a3 3 0 0 1 3 3v7.5A3.5 3.5 0 0 1 14.5 16H7.879l-4.293 4.293A1 1 0 0 1 2 19V16.121A3.5 3.5 0 0 1 0 12.5V5a3 3 0 0 1 3-3h12Z",
  },
  // Add any additional card objects here...
] as const;

const Services: React.FC = () => {
  return (
    <div className='mt-16 px-10'>
      <h4 className='font-bold text-4xl text-center sm:text-3xl'> Our Services</h4>
      <div className='flex flex-wrap justify-center gap-4 mt-6'>
        {card.map((service, index) => (
          <div
            key={index}
            className="max-w-[400px] p-6 m-3  border  border-[#2323FF] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray -700transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <svg
              className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d={service.iconPath} />
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {service.title}
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
