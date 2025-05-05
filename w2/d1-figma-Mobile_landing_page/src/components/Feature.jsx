import React, { useEffect, useRef, useState } from 'react'
import indicator from '../assets/Active Indicator.png'
import bitmap from '../assets/Feature 1.png'
import bitmap1 from '../assets/Bitmap (1).png'
import dotoval from '../assets/dotOval.png'
import bitmap_bg from '../assets/Bitmapbg.png'
import lightbottom from '../assets/Light Bottom.png'
import lighttop from '../assets/Light Top.png'

import bitmap2 from '../assets/Bitmap (2).png'
import Carousel from './Carousel'




const Feature =()=> {

  return (
    <div  className={`feature w-full mt-10  relative`}>
       

       <div className='px-5 lg:px-20'>

        <div className='w-full flex items-center justify-center flex-col gap-5 lg:gap-10'>
        <h1 className='text-center text-3xl lg:text-5xl'>Feature</h1>
        <img src={indicator} alt="" className='w-10 lg:w-20' />
        </div>

        <div className='feature1 w-full flex items-center flex-col md:flex-row justify-center gap-5 lg:gap-10 mt-20 lg:mt-10'>
        <div className='w-fit gap-2 lg:gap-5 flex flex-col '>
                <span className='flex items-center w-fit gap-5 '>
                <img src={dotoval} alt=""  className='w-3 lg:w-6'/> 
                <h1 className='md:text-3xl lg:text-5xl text-lg lg:leading-20 w-fit '> Vivamus sit amet interdum</h1>
                </span>
                <h3 className='lg:text-2xl md:text-lg text-xs w-fit  '>Maecenas nisl libero, tincidunt id odio id, feugiat <br /> vulputate quam vestibulum feugiat.</h3>
            </div>
            <img src={bitmap} alt="" className='md:w-1/3 w-2/3'/>
        </div>


        <div className='feature2 w-full flex items-center flex-col md:flex-row justify-center gap-5 lg:gap-10 mt-20 lg:mt-10'>
            <img src={bitmap1} alt="" className=' md:w-1/3 w-2/3'/>
            <div className='w-fit gap-2 lg:gap-5 flex flex-col '>
                <span className='flex items-center w-fit gap-5 '>
                <img src={dotoval} alt=""  className='w-3 lg:w-6'/> 
                <h1 className='md:text-3xl lg:text-5xl text-lg lg:leading-20 w-fit '> Vivamus sit amet interdum</h1>
                </span>
                <h3 className='lg:text-2xl md:text-lg text-xs w-fit  '>Maecenas nisl libero, tincidunt id odio id, feugiat <br /> vulputate quam vestibulum feugiat.</h3>
            </div>
        </div>


        <div id='showcase' className='w-full flex items-center flex-col z-50 relative'>
       <div className='w-full gap-2 lg:gap-5 flex flex-col mt-30 lg:mt-50 mb-20 items-center justify-center  '>
                <span className='w-full flex flex-col justify-center items-center w-fit gap-2 lg:gap-5 '>
                <h1 className='lg:text-5xl md:text-3xl text-lg lg:leading-20 w-fit '> Vivamus sit amet interdum</h1>
                <img src={dotoval} alt=""  className='md:w-5 w-4 lg:w-6'/> 
                </span>
                <h3 className='lg:text-2xl md:text-lg text-xs w-fit  '>Maecenas nisl libero, tincidunt id odio id, feugiat  vulputate quam vestibulum feugiat.</h3>
            </div>

            <img src={bitmap2} className='lg:w-2/3 mt-10'  alt="" />
        
       </div>
       </div>



       <div className='absolute top-140 lg:top-110 lg:top-200'>
        <img src={lightbottom} alt="" />
       </div>

          
        <div   className={`feature3 relative z-20 w-full mt-[-150px] lg:mt-[-660px] ]`}>
              <img src={bitmap_bg} alt="" />
        </div>
        

      <Carousel/>
  </div>
  )
}

export default Feature