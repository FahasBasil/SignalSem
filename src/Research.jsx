import React from 'react'
import bg from './assets/res.png'
import r1 from './assets/r1.jpg'
import r2 from './assets/r2.jpg'
import r3 from './assets/r3.jpg'
import r4 from './assets/r4.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

const Research = () => {
  return (
        <div className='w-full h-[100vh] mx-auto relative'>
      <div className='w-full h-[50vh] overflow-hidden relative'>
        <img
          className='w-full h-full object-cover'
          src={bg}
          alt='Home Image'
        />
        <div className='absolute top-0 left-0 w-full z-50'>
          <Navbar />
        </div>
        <div className='absolute text-white top-[250px] text-5xl  ml-[100px]  text-center'>
          <h1>Research</h1>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 border border-gray-300 m-[20px]  rounded-[10px] mb-[100px] mt-[80px] transition transform hover:scale-110 duration-500 cursor-pointer'>
        <div className=' bg-[#00755E] text-white rounded-l-[10px]'>
          <h1 className='ml-[30px] mt-[8px] text-2xl pt-4 px-4 pr-[10px]'>Split spectrum Processing (SSP)</h1>
          <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px]'>Split Spectrum Processing (SSP) is a sophisticated frequency diversity technique employed to enhance the signal-to-noise ratio (SNR) in ultrasound signals. In ultrasound applications, where image quality and accuracy are paramount,
           mitigating noise and improving signal strength are critical objectives. SSP achieves this by dividing the ultrasound signal into multiple frequency bands, processing each band separately, and subsequently combining the results.</p>
        </div>
        <div>
            <img src={r1}/>
        </div>
      </div>


      <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 border border-gray-300 m-[20px]  rounded-[10px] mb-[100px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div>
            <img  className='p-5' src={r2}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px]'>
          <h1 className='ml-[30px] mt-[8px] text-2xl pt-4 px-4 pr-[10px]'>Li-ion Battery management systems</h1>
          <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px]'>A Li-ion (Lithium-ion) Battery Management System (BMS) is a critical component in ensuring the safe and efficient operation of lithium-ion batteries, which are widely used in various applications, including electric vehicles, portable electronics, and renewable energy storage. The primary function of a BMS is to monitor, manage, and protect the individual cells within a Li-ion battery pack.</p>
        </div>
        
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 border border-gray-300 m-[20px] rounded-[10px] mb-[100px] transition transform hover:scale-110 duration-500 cursor-pointer'>
        <div className=' bg-[#00755E] text-white rounded-l-[10px]'>
          <h1 className='ml-[30px] mt-[8px] text-2xl pt-4 px-4 pr-[10px]'>Deep learning based detection of COVID-19 from chest X-ray images</h1>
          <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px] pb-[25px]'>
The deep learning-based detection of COVID-19 from chest X-ray images represents a promising and innovative approach in the field of medical diagnostics. Leveraging the power of deep learning algorithms, particularly convolutional neural networks (CNNs), researchers and healthcare professionals are exploring ways to enhance the accuracy and efficiency of COVID-19 detection through radiological imaging.</p>
        </div>
        <div>
            <img className='mt-[20px] pr-4' src={r3}/>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 border border-gray-300 m-[20px] rounded-[10px] mb-[100px] mt-[100px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div>
            <img className='mt-[40px] p-5' src={r4}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px]'>
          <h1 className='ml-[30px] mt-[8px] text-2xl pt-4 px-4 pr-[10px]'>Bidirectional DC-DC converter for lithium-ion battery</h1>
          <p className='ml-[30px] mt-[8px] px-4 pt-3 text-justify mr-[10px] mb-[30px]'>
           A Bidirectional DC-DC Converter for Lithium-ion Battery is a sophisticated power electronics device designed to efficiently manage energy flow between a lithium-ion battery and an external system. This bidirectional converter allows seamless energy transfer in both directions—charging the battery from an external source and discharging it to power external loads. This flexibility makes it a crucial component in various applications, including electric vehicles, renewable energy systems, and portable electronics.</p>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Research