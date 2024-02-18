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
    <div className='w-full h-[100vh] flex justify-center relative'>
        <img className='absolute w-full h-[600px] bg-clip object-cover ' src={trust} ref={cRef}/>
       
        <h1 className='text-white text-5xl lg:mr-[700px] mt-[130px] lg:mt-[200px] absolute lg:ml-[100px] px-[50px] md:px-[100px] lg:px-[100px]'>We're on this journey together</h1>
        <h1 className='text-white text-lg mr-[100px] ml-[50px] lg:mr-[700px] lg:mt-[320px] md:mt-[250px] mt-[290px] absolute md:ml-[100px] lg:ml-[100px] md:pr-[200px] lg:px-[100px]'> Our electronic solutions pave the way for a shared journey towards innovation and efficiency</h1>
        <button className='h-[50px] lg:flex items-center lg:mr-[810px] md:mr-[450px] mr-[270px] text-white border border-white p-4 lg:mt-[430px] mt-[430px] md:mt-[380px] hover:bg-white hover:text-black bg-white bg-opacity-5 backdrop-blur backdrop-filter'>Learn more <FaArrowRightLong className='md:hidden hidden ml-[10px] mt-[4px] lg:flex ' /></button>
        
    </div>
  )
}

export default Jouney