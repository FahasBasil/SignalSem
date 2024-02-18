import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s2.png';
import Footer from '../Footer';


const S2 = () => {

    
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
          <h1>Embedded Systems</h1>
        </div>
      </div>
      <p className='ml-[100px] mt-[40px] pr-[200px] text-justify'>
      Embedded systems are ubiquitous in our daily lives, powering a wide range of devices and applications. 
      They are specially designed to perform specific tasks or functions efficiently, often with real-time constraints. 
      These systems can be found in various domains, including consumer electronics, automotive, medical devices, 
      industrial machines, and more
            
            </p>
            <p className='ml-[100px] mt-[20px] pr-[200px] text-justify pb-[80px]'>
            Our team of experienced engineers excels in designing and developing custom embedded systems
             tailored to meet your unique requirements. Whether you need a sophisticated control system 
             for industrial automation or an intelligent IoT device, we have the expertise to turn your 
             vision into reality.
            </p>

            <Footer/>
    </div>
  );
};

export default S2;
