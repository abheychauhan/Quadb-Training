import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Animations.css";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Animations = () => {
  const circleRef = useRef(null);
  const boxRef = useRef(null);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        scrollTrigger: {
          trigger: '.body',
          start: "top 80px",
          end: "bottom 5%",
          scrub: 1,


        },
        motionPath: {
          path: "#customPath",
          align: "#customPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none",
      });
    });

    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: '#box',
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,

      },
      marginLeft: '0',
      opacity: 1,
      y: 0,
      stagger: 0.2,
    });

    gsap.to(box1Ref.current, {
      scrollTrigger: {
        trigger: box1Ref.current,
        start: "top 65%",
        end: "bottom center",
        scrub: 1,
      },
      marginLeft: '0',
      opacity: 1,
      y: 0,
      stagger: 0.2,
    });
    gsap.to("#box", {
      scrollTrigger: {
        trigger: "#box",
        start: "top 50%",
        end: "bottom 40%",
        scrub: true,

      },
      opacity: 1,
    });
    gsap.to("#box1", {
      scrollTrigger: {
        trigger: "#box1",
        start: "top 50%",
        end: "bottom 45%",
        scrub: true,

      },
      opacity: 1,
    });

    gsap.fromTo(
      box2Ref.current,
      { x: 1000, opacity: 0 }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,


        },
      }
    );

    gsap.to("#box2", {
      scrollTrigger: {
        trigger: "#box2",
        start: "top 55%",
        end: "bottom 45%",
        scrub: true,
      },
      opacity: 1,
    });

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };


  }, []);

  return (
    <div className="body h-[200vw] lg:h-full relative lg:flex lg:items-start lg:justify-center pt-40 p-20 lg:flex-col" >
      <div className="flex flex-col gap-20 items-center justify-center">
        <h1 className="text-4xl text-center">We are creative designers, developers and marketers from India driven by a common purpose to inspire, create and ſaunch ground-breaking ideas.</h1>
        <h3 className="text-center text-3xl">We love taking your vision to reality. Here's how we work:</h3>
      </div>

      <svg
       
        viewBox="-100 -15 1491 1099"
        fill="none"
        className="svg hidden lg:block"
      >
        <rect className="lg:w-1281 lg:h-1090px w-full h-full" fill="transparent" />
        <path
          id="customPath"
          d="
        M625,1.5 
        L1271,2.5 
        L1280.5,261 
        L1188.34,346.37 
        L86.01,359.5 
        L0.39,464.32 
        L0.5,698 
        L1188,697.5 
        L1280.4,818.7 
        L1280.5,1049 
        L0,1049.5"
          stroke="white"
          fill="none"
        />

        <defs>
          <linearGradient id="redGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DCE748" />
            <stop offset="100%" stopColor="#288069" />
          </linearGradient>
        </defs>
        <circle ref={circleRef} r="25" className="" fill="url(#redGradient)" />

      </svg>

      <div className="box1 w-[100%]   overflow-hidden absolute lg:top-[30%] lg:left-[45%] top-[35%] left-[5%]">
        <div className="w-full flex flex-col gap-5 ">
          <h1 ref={boxRef} className="heading text-4xl ml-[-800px] w-full">We create technologies you will be proude of</h1>
          <div id="box" className=" w-[40%] opacity-0">
            <h3 className="texts lg:text-xl">Quad Tech's experience determines the right creative direction based on your company's positioning.</h3>
            <h3 className="texts lg:text-xl">When it comes to marketing your b'ard or business we always make sure to loo De'cre we take o't. We are working together with you to design and execute Ennuvalive: dats driven creatives that win rési rusults.</h3>
          </div>
        </div>
      </div>
      <div className="box2 w-[100%]  overflow-hidden absolute lg:top-[55%] lg:left-[15%] top-[55%] left-[5%]">
        <div className="w-full flex flex-col gap-5 ">
          <h1 ref={box1Ref} className="heading text-4xl ml-[-800px] w-full">We create technologies you will be proude of</h1>
          <div id="box1" className="text w-[40%] opacity-0">
            <h3 className="texts lg:text-xl">Quad Tech's experience determines the right creative direction based on your company's positioning.</h3>
            <h3 className="texts lg:text-xl">When it comes to marketing your b'ard or business we always make sure to loo De'cre we take o't. We are working together with you to design and execute Ennuvalive: dats driven creatives that win rési rusults.</h3>
          </div>
        </div>
      </div>
      <div className="box3 w-[80%] lg:w-[40%]  overflow-hidden flex flex-col gap-5 absolute lg:top-[75%] lg:left-[45%] top-[75%] left-[5%]">
        <div className="w-full flex flex-col gap-5">
          <h1 ref={box2Ref} className=" heading w-full text-3xl   ">We find the Creatives, so you don't have to</h1>
          <div id="box2" className=" w-[80%] opacity-0">
            <h3 className="texts lg:text-xl">Quad Tech's experience determines the right creative direction based on your company's positioning.</h3>
            <h3 className="texts lg:text-xl">When it comes to marketing your b'ard or business we always make sure to loo De'cre we take o't. We are working together with you to design and execute Ennuvalive: dats driven creatives that win rési rusults.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animations;
