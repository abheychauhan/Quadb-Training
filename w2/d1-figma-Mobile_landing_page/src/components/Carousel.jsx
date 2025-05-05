import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/src/assets/m1.png",
  "/src/assets/m2.png",
  "/src/assets/m3.png",
  "/src/assets/m4.png",
  "/src/assets/m5.png",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full dark:bg-[#424242] bg-white h-fit md:py-20 pb-10 md:pb-40 overflow-hidden bg-white rounded-xl mt-[-150px] md:mt-[-600px]] lg:mt-[-700px] z-50 flex justify-center tems-center">
      {/* Image container */}
      <div className="relative w-full md:w-90 lg:w-100 h-64 sm:h-72 md:h-120 lg:h-150 overflow-hidden  border-2 rounded-xl border-gray-300 flex items-center justify-center">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute h-[80%] rounded-4xl object-contain"
          />
        </AnimatePresence>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-10 md:left-50 lg:left-100 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-10 hover:bg-opacity-90"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute right-10 md:right-50 lg:right-100 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-10 hover:bg-opacity-90"
      >
        &#10095;
      </button>


      {/* Dot Indicators */}
      <div className="absolute bottom-0 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full bg-[#00BCD4] ${
              index === i ? " w-5" : ""
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
