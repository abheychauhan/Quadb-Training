import AA from './Components/Animations';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App overflow-hidden  bg-gradient-to-r from-[#3B3B3F] to-[#1F1F23] text-white pt-40 min-h-screen">
      <div className=' w-full  flex items-center justify-center flex-col gap-5'>
        <h1 className='md:text-6xl style'>Come to us with a <span className='bg-gradient-to-r from-[#DCE748] to-[#288069] bg-clip-text text-transparent'>Vision</span></h1>
        <div className='flex items-center justify-center'>
          <div className='w-3 h-3 rounded-full bg-white'></div>
          <div className='w-100 h-1 bg-white'></div>
          <div className='w-3 h-3 rounded-full bg-white'></div>
        </div>
        <h1 className='text-6xl lg:text-8xl'>Embrace the Quest</h1>
        <h3 className='text-xl w-[45%] text-center'>We build digital product from idea to design, development to marketing & PR to Post launch and support</h3>
        <div className='p-[2px] bg-gradient-to-r rounded-full r from-[#DCE748] to-[#288069]'>
          <button className='p-4 rounded-full bg-[#6A7282]  text-xl px-7 '>GET FREE CONSUTATION</button>
        </div>
      
      {/* marquee */}
      <div

      
      className=' bg-gradient-to-r from-white via-black/10 to-white p-1 mt-50'>

      <div className="marquee-container  bg-gradient-to-r from-[#3B3B3F] to-[#1F1F23] py-2  border-gray-300 overflow-hidden">
        <div className="marquee-track style">
          <div className="marquee-content text-6xl flex items-center justify-center ">
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>            
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
          </div>
          <div className="marquee-content flex items-center justify-center">
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
            <span><i className="ri-arrow-left-s-fill"></i><i className="ri-arrow-right-s-fill"></i></span>
            <span>Web Devlopment</span>
  
          </div>
        </div>
      </div>
      </div>
      <Cards/>
      <AA/>
      <Footer/>

      </div>
    </div>
  );
}

export default App;
