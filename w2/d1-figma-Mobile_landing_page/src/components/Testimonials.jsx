import React from 'react'
import lighttop from '../assets/Light Top.png'
import indicator from '../assets/Active Indicator.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'




const pics =[ 
           pic1,
           pic2,
           pic3,
           pic4,
           pic5,
           pic6,
           pic7,

]



function Testimonials() {
    return (
        <div id='testimonials' className='w-full h-screen relative flex items-center mt-[-100px] md:mt-0 justify-center'>

            <div className='w-full md:w-1/2 md:h-1/2 flex items-center justify-center flex-col gap-10 px-5 md:px-0'>
                  <div className='w-full flex items-center justify-center flex-col gap-5 lg:gap-8'>
                      <h1 className='text-center text-3xl lg:text-5xl'>Testimonials</h1>
                      <img src={indicator} alt="" className='w-10 lg:w-20' />
                      </div>

                      <p className='text-center md:w-2/3 text-xs md:text-base'>
                      Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet.
                      </p>

                      <h3 className='text-[#673ab7]'> <span className='font-semibold'>Jihan Doe</span> - Co Founder Luxi Theme</h3>
                     <div className=' flex gap-3 items-center relative z-50'>
                        {pics.map((pic , index)=>(
                          <div key={index}>
                              <img src={pic} alt="" className={`w-full lg:w-30 ${index === 3 ? 'scale-120' :''} border-2 transition duration-300 border-transparent rounded-full hover:border-[#53EAFD]`} />
                          </div>
                            
                        ))}
                     </div>
                
            </div>   

            
            <div className='absolute w-full top-[-600px]'>
                <img src={lighttop} alt="" className='w-full h-350' />
            </div>


        </div>
    )
}

export default Testimonials