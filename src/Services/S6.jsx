import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s6.png';
import Footer from '../Footer';


const S6 = () => {

    
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
          <h1>Bare metals and build route programming</h1>
        </div>
      </div>
      <p className='ml-[100px] mt-[40px] pr-[200px] text-justify'>
      As a pioneering company in the field, we specialize in offering bespoke solutions
       that harness the power of bare-metal programming, 
      providing unparalleled control and optimization for your embedded systems.
      Build Route programming is at the core of our services, facilitating the seamless construction 
      and optimization of software routes for your specific applications. This approach allows us to 
      tailor the programming process to meet the unique requirements of your projects, providing a robust foundation for enhanced reliability and performance.
            
            </p>
            <p className='ml-[100px] mt-[20px] pr-[200px] text-justify pb-[80px]'>
            Empower your projects with the precision and efficiency of bare-metal programming and build route optimization. Contact Signal Semitech today, and let's collaborate to unlock the full potential of your embedded systems.
            </p>

            <Footer/>
    </div>
  );
};

export default S6;
