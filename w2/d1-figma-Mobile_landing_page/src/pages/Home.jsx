import React from 'react'
import apple from '../assets/Apple.png'
import google from '../assets/Google.png'
import mobile_banner from '../assets/mobile_banner.png'
import blueRectangle from '../assets/blueRectangle.png'
import voiletRectangle from '../assets/voiletRectangle.png'
import Triangle from '../assets/Triangle.png'
import dotframe from '../assets/dotframeGroup 37.png'
import dotframeRectangle from '../assets/dotFrameRectangle.png'
import oval from '../assets/Oval.png'
import plus from '../assets/+.png'
import rectangle from '../assets/Rectangle.png'
import download from '../assets/counter ios-cloud-download-outline.png'
import check from '../assets/counter ios-checkmark-outline.png'
import star from '../assets/counter ios-star-outline.png'

import line from '../assets/Line 2.png'
import Nav from '../components/Nav'
import Feature from '../components/Feature'
import Testimonials from '../components/Testimonials'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

function Home() {
  return (
    <div id='feature' className='dark:bg-[#303030] dark:text-white relative w-full min-h-screen  flex flex-col overflow-x-hidden  scrollbar-hidden'>
      <Nav />
      <PageNav />

      <div className='w-full h-full flex flex-col  relative '>

        <div className='w-full   grid grid-cols-1 lg:grid-cols-2 gap-30 md:gap-30 lg:gap-0 items-center mt-50 px-6 md:px-15 z-40'>
          <div className=' flex flex-col gap-5 w-fit'>
            <h1 className='lg:text-7xl md:text-5xl  text-4xl lg:leading-20 '>
              Sed Impwerdiet Enim li Vitae <span className='text-[#673ab7] font-semibold'>Viverra Justo</span>
            </h1>
            <h3 className='dark:text-white lg:text-3xl w-2/3 md:text-2xl text-xl text-[#949494] lg:leading-13 '>
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
            </h3>

            <div className='flex gap-4'>

              <a href="">
                <img src={apple} alt="" className='w-40' />
              </a>
              <a href="">
                <img src={google} alt="" className='w-40' />
              </a>
            </div>

          </div>
          <div className='w-full'>
            <img src={mobile_banner} alt="" className='w-full' />
          </div>

        </div>

        {/*bg design images  */}
        <img src={blueRectangle} alt="" className='absolute w-1/2 right-0  ' />
        <img src={voiletRectangle} alt="" className=' absolute w-[55%] right-0  ' />


        <div className='decoration absolute w-[100%] md:w-[72%] h-[40%]  md:h-[80%] left-0 bottom-90 md:bottom-[-170px]'>
          <img src={Triangle} alt="" className='w-9' />
          <div className='absolute w-1/5 md:w-1/8 bottom-[-400px] md:bottom-0 left-10 md:left-20 flex items-center justify-center'>
            <img src={dotframe} alt="" className='absolute' />
            <img src={dotframeRectangle} alt="" className='w-35 shadow-xl/30 rounded-3xl mix-blend-multiply' />
          </div>
          <img src={oval} alt="" className='absolute right-0 w-1/9  top-110 shadow-xl/30 rounded-full' />
        </div>

        <div className='decoration w-1/3 h-2/3 absolute top-2 right-0'>
          <img src={rectangle} alt="" className='absolute w-20 opacity-50 left-110 top-50' />

          <img src={oval} alt="" className='absolute w-15  right-5' />
          <img src={oval} alt="" className='absolute w-10  left-50 top-50' />
          <img src={oval} alt="" className='absolute w-10  left-80 bottom-50' />

          <img src={plus} alt="" className='absolute w-10 opacity-50 left-20' />
          <img src={plus} alt="" className='absolute w-10 opacity-50 left-50 bottom-50' />
          <img src={plus} alt="" className='absolute w-13 opacity-50 right-[-20px] bottom-50' />


        </div>
      </div>


      <div className='count w-full flex flex-wrap mt-10 items-center  justify-evenly md:mt-50 gap-10 md:gap-0 p-15 md:p-40'>

        <div className='w-fit flex flex-col gap-2'>
          <h1 className='text-[#673AB7] text-xl md:text-3xl lg:text-5xl font-semibold text-center '>+200M</h1>
          <div className='flex items-center gap-2'>
            <img src={download} alt="" className='w-8' />
            <h1 className='text-[#757575] text-xl md:text-2xl lg:text-3xl '>Download</h1>
          </div>
        </div>

        <img src={line} alt="" className='h-25 md:block hidden ' />

        <div className='w-fit flex flex-col gap-2'>
          <h1 className='text-[#673AB7] text-xl md:text-3xl lg:text-5xl font-semibold  text-center '>+480M</h1>
          <div className='flex items-center gap-2'>
            <img src={check} alt="" className='w-8' />
            <h1 className='text-[#757575] text-xl md:text-2xl lg:text-3xl '>Transactions</h1>
          </div>
        </div>

        <img src={line} alt="" className='h-25 md:block hidden' />


        <div className='w-fit flex flex-col gap-2'>
          <h1 className='text-[#673AB7] text-xl md:text-3xl lg:text-5xl font-semibold text-center '>+180M</h1>
          <div className='flex items-center gap-2'>
            <img src={star} alt="" className='w-8' />
            <h1 className='text-[#757575] text-xl md:text-2xl lg:text-3xl '>Rattings</h1>
          </div>
        </div>


      </div>



      <Feature />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home