import React from 'react'
import bg from './assets/h1.png'
import h2 from './assets/h2.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import ReactPlayer from 'react-player'
import Health from './assets/Health.mp4'

const Healthcare = () => {
  return (
    <div className='w-full h-[100vh] mx-auto relative'>
      <div className='w-full h-[50vh] overflow-hidden relative'>
        <img
          className='w-full h-full object-cover'
          src={bg}
          alt='Home Image'
        />
        <div className='absolute top-0 left-0 w-full'>
          <Navbar />
        </div>
        <div className='absolute text-white top-[250px] text-5xl  ml-[100px]  text-center'>
          <h1>Healthcare</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[80px]'>
        <div className=' bg-[#00755E] text-white rounded-l-[10px]'>
          <h1 className='ml-[30px] mt-[8px] text-2xl pt-4 px-4 pr-[10px]'>AI based solutions for Radiologists during volume analysis</h1>
          <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px]'>Split Spectrum Processing (SSP) is a sophisticated frequency diversity technique employed to enhance the signal-to-noise ratio (SNR) in ultrasound signals. In ultrasound applications, where image quality and accuracy are paramount,
           mitigating noise and improving signal strength are critical objectives. SSP achieves this by dividing the ultrasound signal into multiple frequency bands, processing each band separately, and subsequently combining the results.</p>
        </div>
        <div>
            <img src={h2}/>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[80px]'>
      <div className='p-5 pr-[50px]'>
        <ReactPlayer url={Health} controls={true} width='100%' />
      </div>
      <div className='bg-[#00755E] text-white rounded-r-[10px] '>
        <h1 className='ml-[30px] mt-[50px] text-2xl pt-4 px-4 pr-[10px]'>Assistive devices for disabled persons</h1>
        <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px]'>At our organization, our primary focus is on providing cutting-edge assistive technologies specifically designed to eliminate barriers to accessibility for individuals with disabilities. Central to our mission is enhancing the mobility of individuals by addressing the diverse challenges they may face. We recognize that mobility is a fundamental aspect of independence and quality of life, and our assistive technologies are meticulously crafted to empower users in overcoming physical limitations.</p>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Healthcare