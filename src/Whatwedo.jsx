import React, { useEffect, useRef } from 'react'
import home from './assets/w1.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Whatwedo = () => {

    const oneRef = useRef(null)
    const twoRef = useRef(null)

    useEffect(()=>{
        const elOne = oneRef.current
        const elTwo = twoRef.current
        gsap.fromTo(elOne,{x:-300},{x:0,duration:3,scrollTrigger:{
            trigger:elOne,
            scrub:1,
            end:"bottom bottom"
        }})

        gsap.fromTo(elTwo,{x:-300},{x:0,duration:6,scrollTrigger:{
            trigger:elOne,
            scrub:1,
            end:"bottom bottom"
        }})

    },[])
  return (
    <div className='w-full lg:h-[100vh] md:h-[100vh] max-sm:h-[150vh]' id="whatwedo">
     <div className='relative flex sm:flex-row'>
  <div className='w-full lg:h-[100vh]'>
  <img className='w-full h-[600px] bg-clip object-cover top-0 bottom-0' src={home} alt="Background" />
  <img className='md:hidden lg:hidden w-full h-[600px] bg-clip object-cover top-0 bottom-0' src={home} alt="Background" />
  </div>
  <div className='absolute grid lg:grid-cols-2 max-sm:mt-[50px] text-white md:top-[60px] lg:top-[110px] lg:left-[130px] md:left-[50px] md:pr-[70px] lg:pr-[100px] px-[30px] top-[20px]' ref={twoRef}>
    <div className='md:ml-[20px]'>
    <h1>What we do</h1>
    <h1 className='text-4xl flex flex-col mt-[10px]'>
    We offer best services<span>Your success is our commitment</span>
    </h1>
    <p className='opacity-80 mt-2 text-justify md:pr-[100px] lg:pr-[200px] pt-4'>
    From personalized solutions to a commitment to excellence, we strive to make a positive impact on your journey, ensuring that each service we offer contributes to your overall success and well-being. Your success is our priority, and we are here to accompany you on the path to a more fulfilling and prosperous life
    </p>
    </div>
    <div className='grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 sm:mx-3 lg:grid-rows-3 md:ml-[20px] gap-5 max-sm:mt-[100px] lg:ml-[40px] md:gap-y-5 lg:gap-y-8 md:pt-[25px] pt-[20px]' ref={oneRef}>
  <Link to='/digital'><button className='w-full h-[100px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter lg:ml-[20px] transition transform hover:scale-110 duration-500'>Digital Signal Processing using TI processors</button></Link>
  <Link to="/modules"><button className='w-full h-[100px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter lg:ml-[12px] transition transform hover:scale-110 duration-500'>High voltage Magnetron Driver modules</button></Link>
  <Link to="/embedded"><button className='w-full h-[100px] flex items-center text-center px-6 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter lg:ml-[20px] transition transform hover:scale-110 duration-500'>Embedded Systems</button></Link>
  <Link to="consultancy"><button className='w-full h-[100px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 lg:ml-[12px] backdrop-blur backdrop-filter transition transform hover:scale-110 duration-500'>Engineering Consultancy</button></Link>
  <Link to="/stm32"><button className='w-full h-[100px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter lg:ml-[20px] transition transform hover:scale-110 duration-500'>Stm32 based projects</button></Link>
  <Link to="/metals"><button className='w-full h-[100px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter transition transform hover:scale-110 duration-500 lg:ml-[12px]'>Bare metals and build route programming</button></Link>
</div>


  </div>
  <div>

  </div>
</div>
</div>
  )
}

export default Whatwedo