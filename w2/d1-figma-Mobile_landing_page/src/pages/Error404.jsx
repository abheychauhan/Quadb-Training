import React, { useState } from "react";
import { Link } from "react-router-dom";
import LU_logo from "../assets/LU logo.png";
import gear from "../assets/android-settings1.png";
import social_instagram from '../assets/social-instagram.png';
import social_twitter from '../assets/social-twitter.png';
import social_linkedin from '../assets/social-linkedin.png';
import social_facebook from '../assets/social-facebook.png';
import iconOval from '../assets/iconsOval.png';
import er404 from '../assets/404.png'

const Error404 = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English - En");

  const options = ["English - En", "Hindi - Hi"];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 pb-20">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center gap-2">
          <img src={LU_logo} alt="LU Logo" className="lg:w-20 md:w-15 w-10  object-cover" />
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
          <a href="#how" className="flex flex-col items-center text-purple-600">
            How it Works
            <div className="w-2 h-2 mt-1 rounded-full bg-purple-600"></div>
          </a>
          <Link to="/" className="hover:text-purple-600">Feature</Link>
          <Link to="/" className="hover:text-purple-600">Testimonials</Link>
          <Link to="/" className="hover:text-purple-600">Faq</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        </nav>
         
         <a href="#">
           <img src={gear} alt="Settings" className="lg:w-15 md:w-10 w-6 opacity-30" />
         </a>
      </header>

      {/* Main 404 section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10 text-center md:text-left">
        <div>
            <div>
                <img src={er404} alt="" className="lg:w-60 mg:w-40 w-20" />
            </div>
        </div>
        <div className="max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">This page could not be found</h1>
          <p className="text-gray-500 mb-6">
            You can either stay and chill here, or go back to the beginning.
          </p>
          <Link
            to="/"
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full transition"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-start flex-wrap">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-start gap-2">
            <img src={LU_logo} alt="LU Logo" className="w-10" />
            <p>© Luxi Theme 2019</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-xs sm:text-sm">
            <div>
              <h4 className="text-base font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>Donec dignissim</li>
                <li>Curabitur egestas</li>
                <li>Nam posuere</li>
                <li>Aenean facilisis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-2">Services</h4>
              <ul className="space-y-1">
                <li>Cras convallis</li>
                <li>Vestibulum faucibus</li>
                <li>Quisque lacinia purus</li>
                <li>Aliquam nec ex</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li>Suspendisse porttitor</li>
                <li>Nam posuere</li>
                <li>Curabitur egestas</li>
              </ul>
            </div>
          </div>

          {/* Social & Language */}
          <div className="flex flex-col items-center gap-6 mt-6 lg:mt-0">
            {/* Social Icons */}
            <div className="flex gap-4">
              {[social_facebook, social_linkedin, social_twitter, social_instagram].map((icon, i) => (
                <a key={i} href="#" className="relative">
                  <img src={iconOval} alt="" className="w-10" />
                  <img src={icon} alt="" className="w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                </a>
              ))}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-700 rounded-full hover:bg-purple-100 transition"
              >
                <span>{selected}</span>
                <span className="text-sm">▼</span>
              </button>

              {open && (
                <div className="absolute mt-2 w-full bg-white border rounded shadow z-10">
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
      </footer>
    </div>
  );
};

export default Error404;
