import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s1.png';
import Footer from '../Footer';

const S1= () => {

    
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
        <div className='absolute text-white top-[250px] text-4xl  ml-[100px]  text-center'>
          <h1>Digital Signal Processing using TI processors</h1>
        </div>
      </div>
      <p className='ml-[100px] mt-[40px] pr-[200px] text-justify'>
            Our programmable digital signal processors (DSPs) operate in a variety of real-time 
            signal processing applications, including audio and aerospace and defense.
             Our DSP products range from low-power single-core processors to high-performance 
             ulti-core DSPs plus Arm SoCs, ensuring we have the right DSP for your design.
             Our product lineup includes a spectrum of DSP offerings to cater to various design needs. 
             From low-power single-core processors suitable for 
             battery-operated devices to high-performance multi-core DSPs integrated with Arm System-on-Chips (SoCs), 
             we provide a comprehensive range to meet the diverse demands of modern signal processing applications
            
            </p>
            <p className='ml-[100px] mt-[20px] pr-[200px] text-justify pb-[80px]'>
            Whether you are designing a next-generation audio device, a sophisticated radar system, or any other real-time 
             signal processing application, our range of DSP solutions offers the performance, scalability, and flexibility
              you need to bring your designs to life. With a legacy of excellence and a focus on cutting-edge technology, 
              we are dedicated to empowering your innovations in the rapidly evolving world of signal processing
            </p>

            <Footer/>
    </div>
  );
};

export default S1;
