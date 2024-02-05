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
    <div className='w-full h-screen' id="whatwedo">
     <div className='relative'>
  <div className='w-full h-[100vh] '>
    <img className='w-full h-[600px] bg-clip object-cover top-0 bottom-0' src={home} alt="Background" />
  </div>
  <div className='absolute top-0 left-0 right-0'>
    <Navbar />
  </div>
  <div className='absolute grid grid-cols-2  text-white top-[110px] left-[130px] sm:pr-[150px] lg:pr-[100px]' ref={twoRef}>
    <div>
    <h1>What we do</h1>
    <h1 className='text-4xl flex flex-col mt-[10px]'>
    We offer best services<span>Your success is our commitment</span>
    </h1>
    <p className='opacity-80 mt-2 text-justify pr-[200px] pt-4'>
    From personalized solutions to a commitment to excellence, we strive to make a positive impact on your journey, ensuring that each service we offer contributes to your overall success and well-being. Your success is our priority, and we are here to accompany you on the path to a more fulfilling and prosperous life
    </p>
    </div>
    <div className='grid grid-cols-2 grid-rows-3 ml-[40px] gap-y-8'  ref={oneRef}>
        <Link to='/digital'><button className='h-[100px] w-[200px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter ml-[20px] transition transform hover:scale-110 duration-500 '>Digital Signal Processing using TI processors</button></Link>
         <Link to="/modules"><button className='h-[100px] w-[200px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter transition transform hover:scale-110 duration-500'>High voltage Magnetron Driver modules</button></Link>
      <Link to="/embedded"> <button className='h-[100px] w-[200px] flex items-center text-center px-6 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter ml-[20px] transition transform hover:scale-110 duration-500'>Embedded Systems</button></Link>
     <Link to="consultancy"> <button className='h-[100px] w-[200px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter transition transform hover:scale-110 duration-500'>Engineering Consultancy</button></Link>
  <Link to="/stm32"> <button className='h-[100px] w-[200px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter ml-[20px] transition transform hover:scale-110 duration-500'>Stm32 based projects</button></Link>
 <Link to="/metals"> <button className='h-[100px] w-[200px] flex items-center px-3 text-white border border-white hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter transition transform hover:scale-110 duration-500'>Bare metals and build route programming</button></Link>
 
</div>

  </div>
  <div>

  </div>
</div>
</div>
  )
}

export default Whatwedo