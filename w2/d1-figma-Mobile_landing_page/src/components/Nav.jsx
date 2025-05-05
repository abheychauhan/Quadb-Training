import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LU_logo from '../assets/LU logo.png'
import android_setting from '../assets/android-settings.png'
import iconOval from '../assets/iconsOval.png'
import social_facebook from '../assets/social-facebook.png'
import social_instagram from '../assets/social-instagram.png'
import social_twitter from '../assets/social-twitter.png'
import social_youtube from '../assets/social-youtube-outline.png'



const links = [
  { name: "Feature", path: "#feature" },
  { name: "Showcase", path: "#showcase" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "FAQ", path: "#faq" },
  { name: "Contact", path: "/contact" },
];


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
 

   const handleLink = (path)=>{
    setActiveId(path)
    console.log(activeId)
   }

   

   useEffect(()=>{

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
        
   },[])

  return (
    <header className={`header fixed md:absolute  w-full top-0  md:px-20  z-90 ${scrolled ? "bg-purple-500/30 text-white backdrop-blur-md  shadow-md" : " text-black"} ${open ? "bg-white dark:bg-[#424242] " : ""}  `}>
      <div className="w-full mx-auto flex items-center justify-between px-4 pt-4">
        {/* Logo and links */}
        <div className="flex items-center gap-10 justify-center">
          <img className='lg:w-25 md:w-15 w-10 ' src={LU_logo} alt="" />
          <nav className="hidden   lg:flex gap-10 items-center">
            {links.map((link, index) => (
              links.name === 'Contact' ?
              (links.map(()=>(
                <Link to={link.path}> Contact</Link>
              ))) :(
                <a
                key={index}
                onClick={()=>handleLink(link.path)}
                href={link.path}
                className="flex  flex-col items-center text-sm lg:text-xl cursor-pointer transition-colors"
              >
                <span
                  className={
                    activeId === link.path
                      ? "text-purple-600 font-semibold"
                      : "dark:text-white"
                  }
                >
                  {link.name}
                </span>
                {activeId === link.path && (
                  <span className="w-2 h-2 mt-4 bg-purple-600 rounded-full"></span>
                )}
              </a>
              )
            ))}
          </nav>
        </div>



        {/* Social icons */}
        <div className="hidden lg:flex gap-5">
          <a href="" className='relative'>
            <img src={iconOval} className='w-15' alt="" />
            <img src={social_facebook} alt="" className='w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
          </a>
          <a href="" className='relative'>
            <img src={iconOval} className='w-15' alt="" />
            <img src={social_youtube} alt="" className='w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

          </a>
          <a href="" className='relative'>
            <img src={iconOval} className='w-15' alt="" />
            <img src={social_twitter} alt="" className='w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

          </a>
          <a href="" className='relative'>
            <img src={iconOval} className='w-15' alt="" />
            <img src={social_instagram} alt="" className='w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
          </a>


          <Link to="/">
            <img src={android_setting} alt="" className='w-15' />
          </Link>

        </div>

      
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ?<i className={`ri-close-large-line text-3xl ${open ? 'text-[#5C47BA]' : 'text-[white]'} `}></i>  : <i className={`ri-menu-3-line text-4xl ${open ? 'text-[#5C47BA]' : 'text-[white]'}`}></i>} 
        </button>
      </div>

      
      {open && (
        <div className="lg:hidden dark:bg-[#424242] bg-white px-4 pb-4 space-y-4 ">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}

              className="flex flex-col items-center dark:bg-[#424242] bg-white cursor-pointer"
            >
              <span
                className={`${activeId === link.path ? "text-purple-600" : "text-black dark:text-white"
                  }`}
              >
                {link.name}
              </span>
              
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
