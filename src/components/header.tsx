"use client";

import React from 'react';
import Navbar from './navbar';
import { motion } from 'framer-motion';
const Header: React.FC = () => {
 
  return (
    <div className="bg-[url('../img/afisha.jpg')] w-full h-[700px] bg-cover md:h-[660px]  bg-center  ">
    <Navbar/>
    
    <motion.div className='pt-64 md:pt-48 md:pl-0 md:items-center pl-20 flex flex-col items-start sm:px-8'
     initial={{ opacity: 0, y: 100 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} // Animation settings
       >
    <h1 className='  font-extrabold max-w-[800px]   xl:max-w-[600px] md:max-w-[560px] text-5xl xl:text-4xl  sm:text-3xl md:items-center text-white leading-[50px]  text-start uppercase'>Lorem ipsum dolor sit, amet gid albin</h1>
    <p className='text-white mt-3 max-w-[800px]  xl:max-w-[600px] md:max-w-[560px] font-inter md:text-base text-xl md:items-center font-medium leading-7 tracking-[-1px] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestiae voluptate odio voluptatibus ab nesciunt facere earum? Vel ad, sit voluptatibus unde nisi earum tempore temporibus nemo at reprehenderit quis facilis commodi ipsam. Voluptatem minima veritatis illo maxime ea reiciendis nemo quod debitis asperiores pariatur voluptatum, aliquid alias, eligendi nisi.</p>
    <button className='button md:items-start '>Button</button>
    </motion.div></div>
    
  );
};

export default Header;
