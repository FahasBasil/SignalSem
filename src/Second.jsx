import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Second = () => {
  const cRef=useRef(null)
  const dRef=useRef(null)

  useEffect(()=>{
     const el = cRef.current
     gsap.fromTo(el,{x:-200},{x:0,duration:3,scrollTrigger:{
      trigger:el,
      scrub:1
     }})
  },[])
  useEffect(()=>{
    const el = dRef.current
    gsap.fromTo(el,{x:150},{x:0,duration:3,scrollTrigger:{
     trigger:el,
     scrub:1
    }})
 },[])
  return (
    <div className='w-full md:h-[170vh] h-[260vh] lg:h-[80vh] mx-auto ' id="whoweare">
      <div className='grid lg:grid-cols-2 gap-7 m-5'>
        <div className='md:ml-[140px] ml-[50px] lg:ml-[140px]' ref={cRef}>
          <h1 className='text-xl '>Why Signal Semitech</h1>
          <h1 className='text-6xl mt-[10px] font-bold '>We Build <span className='text-[#00755E]'>anything</span> you want</h1>
          <p className='text-justify mt-[10px] md:mr-[100px] lg:mr-[100px]'>Our journey is defined by innovation, expertise, 
          and a commitment to delivering cutting-edge solutions. With a rich history in the field, 
          we stand as pioneers, harnessing our deep-rooted knowledge to drive technological advancements 
          and shape the future of electronic solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-[80px] cursor-pointer" ref={dRef}>
  <div className='flex items-center justify-center p-9 text-center border border-gray-400 text-xl h-[210px] transform transition-transform hover:scale-110 duration-300 hover:bg-gray-400 bg-[#00755E] text-white'>Result Oriented</div>
  <div className='flex items-center justify-center p-6 text-centertext-xl h-[210px] transform transition-transform hover:scale-110 duration-300 hover:bg-[#00755E] bg-gray-400 text-white'>Proven engineering experience</div>
  <div className='flex items-center justify-center p-6 text-center text-xl h-[210px] transform transition-transform hover:scale-110 duration-300 hover:bg-gray-400 bg-[#00755E] text-white'>Compassion Driven Approach</div>
  <div className='flex items-center justify-center p-6 text-center text-xl h-[210px] transform transition-transform hover:scale-110 duration-300 hover:bg-[#00755E]  bg-gray-400 text-white'>Commitment to quality</div>
  <div className='flex items-center justify-center p-6 text-center text-xl h-[210px] sm:w-[495px] md:w-[648px] lg:w-[368px] transform transition-transform hover:scale-110 duration-300 hover:bg-gray-400 bg-[#00755E] text-white'>Flexible engagement models </div>
</div>


        
      </div>
    </div>
  )
}

export default Second