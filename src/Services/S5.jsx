import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s5.png';
import Footer from '../Footer';


const S5 = () => {

    
  return (
    <div className='w-full h-[100vh] mx-auto relative'>
      <div className='w-full h-[50vh] overflow-hidden relative'>
        <img
          className='w-full h-full object-cover'
          src={bg}
          alt='Home Image'
        />
        <div className='absolute top-0 left-0 z-50 w-full'>
          <Navbar />
        </div>
        <div className='absolute text-white top-[250px] text-4xl md:ml-[100px] z-0 ml-[50px] lg:ml-[100px]  text-center'>
          <h1>Stm32 based projects</h1>
        </div>
      </div>
      <p className='pr-[20px] md:pr-[200px] lg:pr-[200px] md:ml-[100px] mt-[20px] ml-[30px] lg:ml-[100px]  text-justify '>
      As a leading provider in the industry, we specialize in designing and delivering 
      cutting-edge projects harnessing the power of STM32 microcontrollers. Our expertise 
      spans a wide array of applications, from embedded systems and IoT devices to industrial 
      automation and consumer electronics.Our STM32-based projects boast a seamless blend of hardware and software, ensuring optimal performance and reliability. We prioritize precision in design and functionality, 
      allowing our projects to meet the demands of diverse industries. 
      The STM32 platform provides a versatile foundation, and our commitment
       to staying abreast of the latest technological advancements ensures that 
       our solutions are at the forefront of innovation
            
            </p>
            <p className='pr-[20px] md:pr-[200px] lg:pr-[200px] md:ml-[100px] mt-[20px] ml-[30px] lg:ml-[100px]  text-justify  pb-[80px]'>
            Choosing Signal Semitech means choosing a partner dedicated to excellence in 
            STM32-based projects. We offer end-to-end services, from project conceptualization 
            and design to development, testing, and deployment. Our client-centric approach ensures 
            that your unique requirements are not only met but exceeded.
            </p>

            <Footer/>
    </div>
  );
};

export default S5;
