import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import home from './assets/pr1.png'
import gsap from 'gsap';
import { FaArrowRightLong } from 'react-icons/fa6';
import Second from './Second'
import Jouney from './Jouney'
import Footer from './Footer'
import Whatwedo from './Whatwedo';


const Home = () => {
  let imgRef = useRef(null);
  let cRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    // Set the initial scale to a value greater than 1
    gsap.set(el, { scale: 1.2});
    gsap.to(el,{scale:1,duration:6})
  
  }, []);
  useEffect(() => {
    const el = cRef.current;
   
    // Set the initial scale to a value greater than 1
    gsap.fromTo(el,{y:0,opacity:0},{y:50,opacity:1,duration:4})
  
  }, []);

  return (
    <div className='w-full h-screen'>
     <div className='relative'>
  <div className='w-full lg:h-[100vh] '>
    <img className='w-full h-[600px] bg-clip object-cover top-0 bottom-0' src={home} alt="Background" ref={imgRef} />
  </div>
  <div className='absolute top-1 z-50 left-0 right-0'>
    <Navbar />
  </div>
  <div className='absolute text-white mt-[150px] left-[50px] lg:left-[150px] top-0  md:left-[130px] lg:pr-[600px] pr-[100px] md:pr-[50px]' ref={cRef}>
    <h1 className='text-4xl'>
      Transforming your Journey into Success
    </h1>
    <p className='opacity-80 mt-2  '>
      Empowering through innovation, we drive global change. Our focus is on technology, not just action, as the force for lasting impact
    </p>
    <button className='flex text-white border border-white p-4 mt-4 hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter'>
      Learn more <FaArrowRightLong className='ml-[10px] mt-[4px]' />
    </button>
  </div>
</div>

      <Second/>
      <Whatwedo/>
      <Jouney/>
      <Footer/>
    </div>
  );
};

export default Home;
