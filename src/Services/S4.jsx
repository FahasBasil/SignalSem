import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s4.png';
import Footer from '../Footer';


const S4 = () => {

    
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
        <div className='absolute text-white top-[250px] z-0 text-4xl md:ml-[100px] ml-[50px] lg:ml-[100px]  text-center'>
          <h1>High volatge Magnetron Driver modules</h1>
        </div>
      </div>
      <p className='pr-[20px] md:pr-[200px] lg:pr-[200px] md:ml-[100px] mt-[20px] ml-[30px] lg:ml-[100px] text-justify '>
      We specialize in crafting state-of-the-art High Voltage Magnetron Driver Modules. 
      These modules are meticulously designed to cater to the exacting demands of diverse applications, 
      including microwave systems, medical equipment, and industrial heating. The compact design of our modules emphasizes space efficiency without
       compromising on functionality, making them ideal for applications with spatial constraints
            
            </p>
            <p className='pr-[20px] md:pr-[200px] lg:pr-[200px] md:ml-[100px] mt-[20px] ml-[30px] lg:ml-[100px]  text-justify  pb-[60px]'>
            What sets us apart is our commitment to providing custom solutions.
            Recognizing the uniqueness of each application, we collaborate closely 
            with clients to tailor our modules, ensuring they align seamlessly with specific requirements.
            Elevate your applications with the power and precision of our High Voltage Magnetron Driver Modules.
            </p>

            <Footer/>
    </div>
  );
};

export default S4;
