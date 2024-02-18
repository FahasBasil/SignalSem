import React from 'react';
import Navbar from '../Navbar';
import bg from '../assets/s3.png';
import Footer from '../Footer';


const S3 = () => {

    
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
          <h1>Engineering Consultancy</h1>
        </div>
      </div>
      <p className='ml-[100px] mt-[40px] pr-[200px] text-justify'>
      Our strategic engineering consultancy services encompass a broad spectrum of disciplines, 
      from civil and structural engineering to mechanical and electrical systems. We collaborate 
      closely with clients to devise robust strategies that optimize project outcomes and ensure 
      long-term success
            
            </p>
            <p className='ml-[100px] mt-[20px] pr-[200px] text-justify pb-[80px]'>
            Innovation is at the core of what we do. Our consultants constantly explore new 
            technologies and methodologies to infuse creativity and efficiency into every project, providing pioneering 
            solutions that set your projects apart.
Our team comprises seasoned professionals with diverse backgrounds, 
ensuring that our consultancy services cover a wide array of engineering disciplines. Expect reliable, 
data-driven recommendations and strategies that stand up to scrutiny.
            </p>

            <Footer/>
    </div>
  );
};

export default S3;
