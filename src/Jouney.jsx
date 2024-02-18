import React, { useEffect, useRef } from 'react'
import trust from './assets/wear.png'
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Jouney = () => {
    const cRef = useRef(null)
    useEffect(()=>{

  const el = cRef.current
  gsap.fromTo(el,{opacity:0},{opacity:1,duration:1,scrollTrigger:{
    trigger:el,
    scrub:1,
    end:"bottom bottom"
    
  }} )

    },[])
  return (
    <div className='w-full md:h-[60vh] lg:h-[100vh] lg:flex justify-center relative'>
        <img className='absolute w-full h-[600px] bg-clip object-cover ' src={trust} ref={cRef}/>
       
        <h1 className='text-white text-5xl lg:mr-[700px] sm:mt-[150px] lg:mt-[200px] absolute lg:ml-[100px] px-[100px]'>We're on this journey together</h1>
        <h1 className='text-white text-lg sm:mr-[200px] lg:mr-[700px] lg:mt-[320px] sm:mt-[270px] absolute sm:ml-[100px] lg:ml-[100px] md:pr-[200px] lg:px-[100px]'> Our electronic solutions pave the way for a shared journey towards innovation and efficiency</h1>
        <button className='h-[50px] lg:flex items-center sm:mr-[300px] lg:mr-[800px] text-white border border-white md:ml-[100px] p-4 lg:mt-[430px] md:mt-[380px] sm:mt-[400px] sm:ml-[100px] hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter'>Learn more <FaArrowRightLong className=' sm:hidden md:hidden ml-[10px] mt-[4px] flex flex-col' /></button>
        
    </div>
  )
}

export default Jouney