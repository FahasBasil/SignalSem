import {React, useEffect, useRef} from 'react'
import bg from './assets/p.png'
import Navbar from './Navbar'
import p1 from './assets/pp1.jpg'
import p2 from './assets/pp2.jpg'
import p3 from './assets/p_1.png'
import p4 from './assets/p_2.png'
import p5 from './assets/p_3.png'
import p6 from './assets/p_4.png'
import p7 from './assets/p_5.png'
import p8 from './assets/p_6.png'
import Footer from './Footer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Products = () => {


  return (
    <div className='w-full h-[200vh]'>
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
          <h1>Products</h1>
        </div>
      </div>

      {/* product  1*/}
   <div>
        <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[50px] mt-[80px] transition transform hover:scale-110 duration-500 cursor-pointer' >
        <div className=' bg-[#00755E] text-white rounded-l-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>High voltage Magnetron Driver modules</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70 '> 
           High voltage magnetron driver modules play a pivotal role in microwave systems, ensuring the efficient operation of magnetrons by handling the high voltages essential for their function. These modules serve as the crucial link between the power supply and the magnetron, delivering the necessary power and control signals. With the ability to handle several kilovolts, they incorporate robust insulation and safety features to maintain system reliability and prevent electrical breakdown.</p>
        </div>
        <div >
            <img className='rounded-r-[10px]' src={p1}/>
        </div>
      </div>

      {/* product 2*/}

      <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div >
            <img className='rounded-l-[10px] w-[590px] bg-clip object-cover h-300px]' src={p2}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Modbus Sensor Modules</h1>
          <p className='ml-[30px] pr-9 pl-4 pt-1 text-justify mr-[10px] opacity-70  '> 
          Modbus sensor modules are devices designed to facilitate communication between sensors and a control or monitoring system using the Modbus communication protocol. Modbus is a widely adopted serial communication protocol that enables the exchange of data between industrial devices over a network. These sensor modules act as intermediaries, collecting data from connected sensors and transmitting it in a standardized format.</p>
        </div>
       
      </div>

      {/* product 3*/}

      <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
  <div className='bg-[#00755E] text-white rounded-l-[10px]'>
    <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'> Marine Communication Devices</h1>
    <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
    Marine communication devices are essential tools in the maritime industry, ensuring safety, efficiency, and coordination. Specifically designed for reliable communication between vessels at sea and with onshore authorities, Very High-Frequency (VHF) radios play a fundamental role. They enable ship-to-ship and ship-to-shore communication, as well as the distribution of vital information like weather updates and navigational warnings.
    </p>
  </div>
  <div>
    <img className='rounded-r-[10px] h-[100%] object-cover bg-clip overflow-hidden' src={p3} alt="Magnetron Image"/>
  </div> 
</div>


       {/* product 4*/}

       <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div >
            <img className='rounded-l-[10px]' src={p4}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Microcontroller Trainer Kits</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
           
Microcontroller Trainer Kits serve as invaluable educational tools, providing a hands-on platform for learning and experimenting with microcontroller technology. These kits are designed to introduce students, hobbyists, and professionals to the fundamentals of microcontroller programming, interfacing, and system development. Typically equipped with a microcontroller unit (MCU), essential input/output components, and a variety of sensors, these kits offer a comprehensive environment for understanding embedded systems.</p>
        </div>
       
      </div>



       {/* product 5*/}

       <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
     
        <div className=' bg-[#00755E] text-white rounded-l-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Flash Burner</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
          
A flash burner, or microcontroller/EEPROM burner, is a vital tool in embedded systems development. Specifically designed for programming flash memory devices, it facilitates the transfer of compiled code and data to microcontrollers, enabling developers to write, erase, and reprogram memory for firmware updates or application code.</p>
        </div>
        <div >
            <img className='rounded-r-[10px]' src={p5}/>
        </div>
      </div>


      {/* product 6*/}

      <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div >
            <img className='rounded-l-[10px]' src={p6}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Buck-Boost Converter</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
          
A buck-boost converter is a versatile power electronics device widely used in various electronic applications for voltage regulation. Its primary function is to efficiently step up (boost) or step down (buck) an input voltage to provide a stable and regulated output voltage. This flexibility makes buck-boost converters valuable in scenarios where the input voltage can vary widely, and a constant output voltage is required.</p>
        </div>
       
      </div>
      {/* product 7*/}

      <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      
        <div className=' bg-[#00755E] text-white rounded-l-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Electronic Scrolling Message Board</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
          An electronic scrolling message board, often referred to as an LED scrolling display, is a dynamic communication tool that utilizes light-emitting diodes (LEDs) to display scrolling text messages or information. These message boards are commonly used in various settings, including retail spaces, transportation systems, public venues, and informational displays.</p>
        </div>
        <div >
            <img className='rounded-r-[10px]' src={p7}/>
        </div>
      </div>
      {/* product 8*/}

      <div className='grid grid-cols-2 border border-gray-300 m-[20px] mx-[100px] rounded-[10px] mb-[100px] mt-[20px] transition transform hover:scale-110 duration-500 cursor-pointer'>
      <div >
            <img className='rounded-l-[10px]' src={p8}/>
        </div>
        <div className=' bg-[#00755E] text-white rounded-r-[10px] '>
          <h1 className='ml-[30px] mt-[20px] text-2xl pt-4 px-4 pr-[10px]'>Battery charge controller & mppt</h1>
          <p className='ml-[30px] mt-[8px] pr-9 pl-4 pt-3 text-justify mr-[10px] opacity-70'> 
          
A battery charge controller, complemented by Maximum Power Point Tracking (MPPT) technology, plays a pivotal role in the seamless functioning of off-grid solar power systems. This intelligent device acts as a guardian for the connected batteries, overseeing the charging process and preventing potential issues like overcharging or deep discharging.</p>
        </div>
       
      </div>
      </div>
        <Footer/>
      </div>
      
        
  )
}

export default Products