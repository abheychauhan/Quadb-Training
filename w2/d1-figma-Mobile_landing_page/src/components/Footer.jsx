import React, { useState } from 'react'
import indicator from '../assets/Active Indicator.png'
import n1 from '../assets/n1.png'
import n2 from '../assets/n2.png'
import n3 from '../assets/n3.png'
import apple from '../assets/Apple.png'
import google from '../assets/Google.png'
import LU_logo from '../assets/LU logo.png'
import social_instagram from '../assets/social-instagram.png'
import social_twitter from '../assets/social-twitter.png'
import social_linkedin from '../assets/social-linkedin.png'
import social_facebook from '../assets/social-facebook.png'
import bg from '../assets/Rectangle (1).png'
import bg_combined from '../assets/Combined Shape.png'
import newsbg from '../assets/newsbg.png'

import iconOval from '../assets/iconsOval.png'






const newsItems = [
    {
        type: "HEADLINE",
        title: "Sed imperdiet enim ligula, vitae viverra justo.",
        img: n1, // Red bird
        link: "#",
        large: true,
    },
    {
        type: "NEWS",
        title: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
        img: n2, // Sky
        link: "#",
    },
    {
        type: "NEWS",
        title: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
        img: n3, // City
        link: "#",
    },
];

function Footer() {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("English - En");
  
    const options = ["English - En", "Hindi - Hi"];
  
    return (
        <div className='w-full md:min-h-screen text-white  '>

            <div className='w-full flex  flex-col gap-10'>
                  <div className='w-full flex items-center justify-center flex-col gap-10'>
                  <div className='w-full flex items-center justify-center flex-col gap-5 lg:gap-8'>
                    <h1 className='text-center text-3xl text-black lg:text-7xl dark:text-white'><span className='text-gray-500 '> Latest</span> News</h1>
                    <img src={indicator} alt="" className='w-10 lg:w-20' />
                </div>

                <p className='text-center md:w-2/3 text-base px-2 md:text-base dark:text-white lg:text-3xl text-gray-600'>
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.
                </p>


                  </div>

                <div className="w-full mt-10 relative   p-6 flex flex-col lg:flex-row  gap-8 lg:gap-15 items-center justify-center px-9  md:px-0  ">
                    
                    <div className="relative h-85 bg-white dark:bg-[#424242] rounded-3xl shadow-2xl max-w-md w-full p-4 z-50">
                        <img
                            src={newsItems[0].img}
                            alt="Headline"
                            className="w-[90%] h-18  lg:w-100 lg:top-[-30px] top-[-20px] left-4 lg:left-7 absolute h-56 object-cover rounded-2xl"
                        />
                        <div className="mt-50 space-y-2">
                            <p className="text-sm text-gray-500 font-medium dark:text-white">{newsItems[0].type}</p>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {newsItems[0].title}
                            </h2>
                            <a href={newsItems[0].link} className="text-purple-600 font-medium hover:underline">
                                Read more
                            </a>
                        </div>
                    </div>

                
                    <div className=" flex flex-col gap-6 z-50">
                        {newsItems.slice(1).map((item, idx) => (
                            <div
                                key={idx}
                                className="relative dark:bg-[#424242]  bg-white rounded-3xl shadow-2xl flex items-center py-9 gap-4 max-w-sm w-full"
                            >
                                <img
                                    src={item.img}
                                    alt="News"
                                    className="absolute top- left-[-20px] w-30 object-cover rounded-2xl"
                                />
                                <div className="ml-20 flex flex-col gap-2 justify-center   px-7">
                                    <p className="text-sm text-gray-500 font-medium dark:text-white ">{item.type}</p>
                                    <h3 className="text-sm font-semibold dark:text-white text-gray-800 leading-snug">
                                        {item.title}
                                    </h3>
                                    <a href={item.link} className="text-purple-600 text-sm font-medium hover:underline">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={newsbg} alt="" className='absolute w-full lg:top-0 md:top-100 md:h-screen' />
                </div>
                <div className='min-h-screen relative flex  items-end lg:py-20 lg:mt-60  '> 
                    <div className='w-full flex flex-col items-center justify-center gap-5 md:gap-10 lg:gap-10  relative z-50 p-3'>
                        <h1 className='text-lg md:text-2xl'>What are you waiting for? Download Now!</h1>

                        <div className='flex gap-4'>

                            <a href="">
                                <img src={apple} alt="" className='w-30 lg:w-40' />
                            </a>
                            <a href="">
                                <img src={google} alt="" className='w-30 lg:w-40' />
                            </a>
                        </div>

                        <div className='w-full flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center gap-2 md:gap-10 lg:gap-30  ' >
                            <div className='flex md:flex-col items-center justify-center'>
                                <img className='lg:w-25 md:w-20 w-15 ' src={LU_logo} alt="" />
                                <p>© Luxi Theme 2019</p>
                            </div>
                            <div className='flex text-xs lg:text-base  justify-center gap-5 px-2 lg:gap-10 md:mt-20'>
                                <div className='flex flex-col gap-1 md:gap-4'>
                                    <h1 className='text-base lg:text-xl font-semibold'>Company</h1>
                                    <h3 className=' '>Donec dignissim</h3>
                                    <h3 className=''>Curabitur egestas</h3>
                                    <h3 className=' '>Nam posuere</h3>
                                    <h3 className=' '>Aenean facilisis</h3>
                                </div>
                                <div className='flex flex-col gap-1 md:gap-4'>
                                    <h1 className='text-base lg:text-xl font-semibold'>Services</h1>
                                    <h3 className=' '>Cras convallis</h3>
                                    <h3 className=''>Vestibulum faucibus</h3>
                                    <h3 className=' '>Quisque lacinia purus</h3>
                                    <h3 className=' '>Aliquam nec ex</h3>
                                </div>
                                <div className='flex flex-col gap-1 md:gap-4'>
                                    <h1 className='text-base lg:text-xl font-semibold'>legal</h1>
                                    <h3 className=' '>Suspendisse porttitor</h3>
                                    <h3 className=''>Nam posuere</h3>
                                    <h3 className=' '>Curabitur egestas </h3>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-4 md:gap-10'>
                                <div className="flex gap-5">
                                    <a href="" className='relative'>
                                        <img src={iconOval} className='md:w-15 w-9' alt="" />
                                        <img src={social_facebook} alt="" className='md:w-5 w-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                                    </a>
                                    <a href="" className='relative'>
                                        <img src={iconOval} className='md:w-15 w-9' alt="" />
                                        <img src={social_linkedin} alt="" className='md:w-8 w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

                                    </a>
                                    <a href="" className='relative'>
                                        <img src={iconOval} className='md:w-15 w-9' alt="" />
                                        <img src={social_twitter} alt="" className='md:w-8 w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

                                    </a>
                                    <a href="" className='relative'>
                                        <img src={iconOval} className='md:w-15 w-9' alt="" />
                                        <img src={social_instagram} alt="" className='md:w-8 w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                                    </a>

                                </div>
                                <div className="relative inline-block text-left">
                                    <button
                                        onClick={() => setOpen(!open)}
                                        className="flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-purple-700 transition"
                                    >
                                        
                                        <span className="text-base font-medium">{selected}</span>
                                        down
                                    </button>

                                    {open && (
                                        <div className="absolute mt-2 top-[-100px] w-full bg-white text-purple-700 rounded-lg shadow-lg z-10">
                                            {options.map((option, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => {
                                                        setSelected(option);
                                                        setOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                     <img src={bg} alt=""  className='absolute lg:bottom-[-20px]  bottom-0 h-[80%] lg:h-[100%] md:h-full w-full'/>
                     <img src={bg_combined} alt="" className='absolute h-40 md:h-fit top-[160px] md:top-5 lg:top-[-27px]' />
                </div>
            </div>

        </div>
    )
}

export default Footer