import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioScrollSection() {
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const container = imgContainerRef.current;
    const image = imgRef.current;

    gsap.to(image, {
      y: "-200%", 
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1000", 
        scrub: true,
        pin: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={imgContainerRef} className="h-[120vh] w-full  p-10 flex justify-evenly items-start">
      <div className=" text-white p-6 h-2/3 w-2/3 text-3xl flex flex-col items-start justify-end">
        <p className="style text-xl md:text-3xl lg:text-6xl">see what's cooking at our <span className="bg-gradient-to-r from-[#DCE748] to-[#288069] bg-clip-text text-transparent">labs</span></p>
        <h1 className="text-6xl font-bold">Portfolio</h1>
      </div>

      <div className="lg:w-[40%] lg:h-[80%] w-[50%] h-[90%] overflow-hidden relative">

        <div ref={imgRef} className="overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1541560052-5e137f229371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Scrolling Portfolio"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
