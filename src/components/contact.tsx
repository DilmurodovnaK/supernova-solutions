// // "use client";
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import img from "../app/favicon.ico"; // You can change this to your actual image path

// // const Contact: React.FC = () => {
// //   return (
// //     <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-lg">
// //       <motion.div
// //         className="flex-1 p-4"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         {/* Display image */}
// //         <img src={img.src} alt="Contact Us" className="w-full h-auto rounded-lg mb-6" />

// //         {/* Title */}
// //         <h2 className="text-3xl font-bold mb-6 text-black">Свяжитесь с нами</h2>

// //         Form with flex layout
// //         <form className="space-y-4">
// //           <div className="flex flex-col md:flex-row gap-4">
// //             <input
// //               type="text"
// //               placeholder="Имя"
// //               className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2323FF] text-black"
// //               required
// //             />
// //             <input
// //               type="text"
// //               placeholder="Фамилия"
// //               className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2323FF] text-black"
// //               required
// //             />
// //           </div>

// //           <input
// //             type="email"
// //             placeholder="Электронная почта"
// //             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2323FF] text-black"
// //             required
// //           />

// //           <textarea
// //             placeholder="Описание"
// //             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2323FF] text-black"
// //             rows={4}
// //             required
// //           />

// //           <input
// //             type="tel"
// //             placeholder="Мобильный номер"
// //             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2323FF] text-black"
// //             required
// //           />

// //           <button
// //             type="submit"
// //             className="w-full p-3 bg-[#2323FF] text-white rounded-lg hover:bg-blue-600 transition duration-200"
// //           >
// //             Подтвердить
// //           </button>
// //         </form>
// //       </motion.div>

// //       {/* Secondary image for larger screens */}
// //       <div className="flex-1 hidden md:block">
// //         <img src="/contact-image.jpg" alt="Contact Us" className="w-full h-auto rounded-lg" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;
// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
"use client"
import React from 'react'
import {motion} from "framer-motion"
import image from "@/img/image.jpg"
const Contact = () => {
  return (
    <motion.div className='mt-16 px-10 max-w-[1440px]'
    >
      <h4 className='font-bold text-4xl text-center sm:text-3xl'> Contact Us</h4>
      <div className='flex mt-10 gap-x-10  justify-between lg:flex-col lg:items-center'>
        <div className='max-w-[50%] lg:hidden'>
          <img src={image.src} alt="" className='max-w-[400px] items-center max-h-[400px] bg-cover rounded-[50%]' />
        </div>
        <div className='max-w-[50%] items-end'>
             <form className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4  ">
           <input
              type="text"
              placeholder="Имя"
              className="flex-1 p-3 border border-gray-300 rounded max-w-[500px] focus:outline-none focus:border-[#2323FF] text-black"
              required
            />
            <input
              type="text"
              placeholder="Фамилия"
              className="flex-1 p-3 border border-gray-300 rounded max-w-[500px] focus:outline-none focus:border-[#2323FF] text-black"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Электронная почта"
            className="w-full p-3 border border-gray-300 rounded max-w-[500px] focus:outline-none focus:border-[#2323FF] text-black"
            required
          />

          <textarea
            placeholder="Описание"
            className="w-full p-3 border border-gray-300 rounded max-w-[500px] focus:outline-none focus:border-[#2323FF] text-black"
            rows={4}
            required
          />

          <input
            type="tel"
            placeholder="Мобильный номер"
            className="w-full p-3 border border-gray-300 rounded max-w-[500px] focus:outline-none focus:border-[#2323FF] text-black"
            required
          />

          <button
            type="submit"
            className="w-full p-3 bg-[#2323FF] text-white rounded-lg max-w-[500px] hover:bg-blue-600 transition duration-200"
          >
            Подтвердить
          </button>
        </form>
        </div>
       
      </div>
      
      </motion.div>
  )
}

export default Contact