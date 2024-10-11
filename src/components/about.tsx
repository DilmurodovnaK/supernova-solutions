"use client"
import React from 'react';
import { motion } from 'framer-motion';
import about from "@/img/aboutus.png" ;
import { div } from 'framer-motion/client';

const About: React.FC = () => {
  return (
   <motion.div className='mt-16 scroll-mt-28 ig:mt-10 px-10 '
     initial={{ opacity: 0, y: 100 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} // Animation settings
       >
      <h4 className='font-bold text-4xl text-center  sm:text-3xl '>ABOUT US</h4>
    <div
      className="items-start  justify-between mt-14   gap-14 lg:flex-col lg:items-center  flex  text-center leading-8 xl:justify-evenly ig:flex-col "
     
    >
        
      <div className=" max-w-[50%] lg:max-w-[100%]">
      <img src={about.src} alt="" width={600} className='max-w-[600px] rounded-xl responsive' />
      </div>
      
      <div className="max-w-[50%] lg:max-w-[100%]  ">
      
        <p className="mb-3 max-w-[700px] xl:text-sm lg:text-base text-xl   font-inter text-start   mm:text-xs">
        
Welcome to Supernova Solutions—your trusted partner in digital transformation. We specialize in providing top-tier services in web development, creating custom Telegram bots, and designing intuitive UX/UI solutions that enhance user experience and drive engagement. Our team of experienced developers and designers are passionate about delivering innovative solutions tailored to meet the unique needs of each client.

At Supernova Solutions, we believe in a collaborative approach, working closely with our clients to ensure we build digital products that are not only functional but also visually appealing. Whether you need a dynamic website, an interactive bot, or a sleek user interface, we've got the expertise to bring your ideas to life.

Join us as we transform your digital presence and empower your business with cutting-edge technology.
        </p>
      </div>
      
    </div>
  </motion.div>
   
  );
};

export default About;