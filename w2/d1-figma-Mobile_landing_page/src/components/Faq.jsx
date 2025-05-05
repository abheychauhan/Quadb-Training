import { div, h1 } from "framer-motion/client";
import React, { useState } from "react";
import indicator from '../assets/Active Indicator.png'
import faqimg from '../assets/faqBitmap.png'


const faqData = [
  {
    question: "Pellentesque ac bibendum tortor?",
    answer:
      "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
  },
  {
    question: "In mi nulla, fringilla vestibulum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet.",
  },
  {
    question: "Quisque lacinia purus ut libero?",
    answer: "Aliquam erat volutpat. Nulla facilisi.",
  },
  {
    question: "Quisque ut metus sit amet augue?",
    answer: "Etiam sed turpis ac sapien mollis accumsan.",
  },
  {
    question: "Pellentesque ac bibendum tortor?",
    answer: "Nullam rhoncus, purus a vehicula tincidunt, metus nulla viverra.",
  },
];


const images = [
    {path:'/src/assets/logo_dummy1.png', id :'1'},
    {path:'/src/assets/logo_dummy2.png', id :'2'},
    {path:'/src/assets/logo_dummy3.png', id :'3'},
    {path:'/src/assets/logo_dummy4.png', id :'4'},
    {path:'/src/assets/logo_dummy5.png', id :'5'},
    {path:'/src/assets/logo_dummy6.png', id :'6'}
 
    
]

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="faq" className=" min-h-screen pb-40">
      
      <div className="flex flex-col md:flex-row items-top justify-center px-4 md:px-15 py-20 gap-10">

      <div className="w-full md:w-1/2">
       
               <div className='w-full flex  flex-col gap-5 lg:gap-10'>
               <h1 className=' text-3xl lg:text-5xl'>FAQ</h1>
               <img src={indicator} alt="" className='w-10 lg:w-20' />
               <p className="text-lg">Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. </p>
               <img src={faqimg} alt="" className="w-50 lg:w-100" />
               </div>

      </div>

      {/* FAQ List */}
      <div className="w-full md:w-1/2 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white text-black dark:text-white"
          >
            <button
              onClick={() => toggleIndex(index)}
              className={`w-full flex justify-between items-center dark:text-white dark:bg-[#424242] px-6 py-4 font-semibold text-left ${
                activeIndex === index
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                  : "text-black "
              }`}
            >
              {item.question}
              {activeIndex === index ? (
               <i className="text-xl ri-arrow-up-wide-line"></i>
              ) : (
                <i className="text-xl text-[#5D3DF9] ri-arrow-down-wide-line"></i>
              )}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 dark:text-white  bg-white dark:bg-[#424242]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

      <div className="w-full h-fit flex flex-wrap items-center flex-col justify-center gap-20">
        <h1 className=" text-xl md:text-2xl lg:text-4xl" >Nulla lobortis nunc vitae nisi</h1>
        <div className="w-full flex flex-wrap  items-center justify-center gap-15 lg:gap-40 ">
            {images.map((img ,index)=>(
               <img key={index} src={img.path} className={`w-8 md:w-15 ${img.id === '2'? 'w-12 md:w-25' :'' } `} alt="" />
            
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
