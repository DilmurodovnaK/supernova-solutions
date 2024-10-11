// components/EnvironmentPlans.tsx
import React from 'react';
import Image from 'next/image';
import building from '@/img/building.svg';


type Plan = {
  icon: string;
  title: string;
  text: string;
};

export const plans: Plan[] = [
  {
    icon: building,
    title: 'Custom Web Development',
    text: 'We create responsive and robust websites tailored to meet the unique needs of businesses and individuals.',
  },
  {
    icon: building,
    title: 'Telegram Bot Solutions',
    text: 'Automate your workflow with powerful Telegram bots, designed to handle various tasks and integrate smoothly with your systems.',
  },
  {
    icon: building,
    title: 'UX/UI Design Services',
    text: 'Our design team focuses on creating user-friendly interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: building,
    title: 'Mobile Application Development',
    text: 'We develop high-quality mobile applications that offer seamless performance and exceptional user experience on both iOS and Android platforms.',
  },
  {
    icon: building,
    title: 'E-Commerce Solutions',
    text: 'We build scalable and secure e-commerce platforms to help businesses grow and thrive in the digital marketplace.',
  },
  {
    icon: building,
    title: 'Digital Marketing & SEO',
    text: 'Our digital marketing strategies and SEO services help improve your online presence and drive more traffic to your business.',
  },
];


const Wedo: React.FC = () => {
  

  return (
    <div className=" mt-10 px-10">
    
      <h4 className='font-bold text-4xl text-center sm:text-3xl'> What we do</h4>
        <div className="mt-16 mb-6">
          <div className="grid grid-cols-3 gap-y-16 gap-x-8 w-full xl:grid-cols-2 md:grid-cols-1  items-start justify-between">
            {plans.map((item, index) => (
              <div key={index} className="flex w-[75%] items-start gap-8">
                <Image src={building} alt={item.icon} className="mt-1" />
                <span className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-[#1D2130]">
                    {item.title}
                  </h2>
                  <p className="text-base font-normal text-[#525560] w-[300px]">
                    {item.text}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default Wedo;
