import React from 'react';

import blueRectangle from '../assets/contRectangle.png'
import purpleRectangle from '../assets/contRectangle (1).png'
import Triangle from '../assets/Triangle1.png'
import dotframe from '../assets/dotframeGroup 37.png'
import dotframeRectangle from '../assets/dotFrameRectangle.png'
import oval from '../assets/Oval.png'
import { useNavigate } from 'react-router-dom';



const Contact = () => {

    const navigate = useNavigate()
  return (


    <div className='relative dark:bg-[#424242]  w-full min-h-screen flex items-center justify-center overflow-hidden '>

    <div className="relative md:w-2/3 w-full text-white md:h-1/2 flex items-center justify-center  shadow-[2px_2px_30px_10px_#9CA3AF] md:rounded-[80px] z-50">
      <div className="w-full md:px-30 p-10 md:py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#311B92] mb-10 dark:text-white">
          Say Hello to Us
        </h1>
        <h3 className='text-gray-500 text-center md:text-xl text-base mb-5 dark:text-white'>Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 ">
          {/* Row 1 */}
          <input
            type="text"
            placeholder="What is your name? *"
            className="p-3 outline-2 outline-gray-400 focus:outline-[#53EAFD] rounded-md text-black placeholder-dark:text-white bg-white/50 dark:text-white"
          />
          <input
            type="email"
            placeholder="What it your email? *"
            className="p-3 outline-2 outline-gray-400 focus:outline-[#53EAFD] rounded-md text-black bg-white/50 placeholder-dark:text-white dark:text-white"
          />
          {/* Row 2 */}
          <input
            type="tel"
            placeholder="+12 345 678 90"
            className="p-3 outline-2 outline-gray-400 focus:outline-[#53EAFD] rounded-md text-black col-span-1  placeholder-dark:text-white bg-white/50 dark:text-white "
          />
          <input
            type="text"
            placeholder="What is your company?"
            className="p-3 outline-2 outline-gray-400 focus:outline-[#53EAFD] rounded-md text-black placeholder-dark:text-white dark:text-white  bg-white/50"
          />
          {/* Message Box */}
          <textarea
            placeholder="Write your message here"
            rows="5"
            className="p-4 outline-2 outline-gray-400 focus:outline-[#53EAFD] rounded-md text-black md:col-span-2 placeholder-dark:text-white dark:text-white  bg-white/50"
          ></textarea>

          {/* Bottom section */}
          <div className="flex items-center gap-2 mt-2 md:col-span-1">
            <input type="checkbox" id="policy" className="accent-cyan-400 w-5 h-5" />
            <label htmlFor="policy" className="text-cyan-400">
              Service & Privacy Policy *
            </label>
          </div>

          <div className="flex justify-end md:col-span-1 mt-2">
            <button
              type="submit"
              className="bg-cyan-400 text-white  px-6 py-3 rounded-full hover:bg-cyan-300 transition"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>

      </div>
      <button  onClick={()=>navigate('/')}>
        <i className="ri-close-large-line text-2xl md:text-xl lg:text-2xl absolute top-5 left-5 md:top-15 md:left-20 text-black"></i>     
      </button>
    </div> 
            <img src={purpleRectangle} alt="" className=' absolute w-[55%] right-0  ' />
            <img src={blueRectangle} alt="" className='absolute w-1/2 right-0  ' />
                   <div className='decoration absolute w-[100%] md:w-[70%] h-[40%]  md:h-[80%] left-0 bottom-0 md:bottom-[0px]'>
                     <img src={Triangle} alt="" className='w-16 absolute left-20' />
                     <div className='absolute w-1/5 md:w-1/8  md:top-70 left-10 md:left-50 rotate-60 flex items-center justify-center'>
                       <img src={dotframe} alt="" className='absolute' />
                       <img src={dotframeRectangle} alt="" className='w-30  rounded-3xl mix-blend-multiply' />
                     </div>
                     <img src={oval} alt="" className='absolute right-0 w-1/9  bottom-[-30px]  rounded-full' />
                   </div>

    </div>
  );
};

export default Contact;
