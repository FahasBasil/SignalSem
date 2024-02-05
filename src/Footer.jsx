import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00755E] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://signalsemitech.in/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Signal semitech</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            

            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Follow us</h2>
              <ul className="text-gray-500 text-gray-100 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
              <ul className="text-gray-500 text-gray-100 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-100">
            <a href="https://flowbite.com/" className="hover:underline"></a>All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Icons */}
    
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
