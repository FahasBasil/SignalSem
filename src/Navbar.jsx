import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleServicesDropdown = (serviceId) => {
    setServicesDropdownOpen(true);
    onServiceClick(serviceId);
  };

const closeMenu = () => {
    setMenu(false);
  };


  const closeDropdowns = () => {
    setServicesDropdownOpen(false);
    
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bg-white w-full top-0 bg-opacity-5 backdrop-filter backdrop-blur h-[100px] border border-gray-100 border-opacity-15 mx-auto transition transform duration-300 ${scrolling ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="flex items-center  text-white md:justify-between lg:justify-between mx-[80px] justify-center md:mt-[1.3rem] lg:mt-[1.3rem] ">
        <Link
        to="/"
        >
        <h1 className="lg:ml-[10px] text-2xl text-white lg:mt-0 md:mt-0">
          <span className="text-4xl font-bold">S</span>ignal semitech
        </h1>
        </Link>

        
        
        {/* Navbar */}
        <nav className="lg:flex lg:ml-[50px] md:ml-[20px] cursor-pointer hidden md:flex">
        <Link1 to="whatwedo" className="hover:text-[#009E60] px-7" onClick={closeDropdowns}
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}>
           What we do
          </Link1>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleServicesDropdown}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-[#009E60] px-7 focus:outline-none">
              Services <IoIosArrowDown className=" ml-[5px]" />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 items-left flex  bg-white bg-opacity-5 backdrop-blur backdrop-filter p-5 border border-gray-100 rounded shadow text-white  max-w-[1000px]" onMouseEnter={handleServicesDropdown}>
                <Link to="/digital" className="block px-5 py-2 hover:bg-[#00755E]  rounded-[8px]">
                Digital Signal processing using TI processors
                </Link>
                <Link to="/embedded" className="block px-4 py-2 hover:bg-[#00755E]  rounded-[8px]">
                Embedded Systems
                </Link>
                <Link to="/consultancy" className="block px-4 py-2 hover:bg-[#00755E] rounded-[8px]">
                Engineering Consultancy
                </Link>
                <Link to="/modules" className="block px-4 py-2 hover:bg-[#00755E]  rounded-[8px]">
                High volatge Magnetron Driver modules
                </Link>
                <Link to="/stm32" className="block px-4 py-2 hover:bg-[#00755E] rounded-[8px]">
                Stm32 based projects
                </Link>
                <Link to="/metals" className="block px-4 py-2  hover:bg-[#00755E]  rounded-[8px]">
                Bare metals and build route programming
                </Link>
              </div>
            )}
          </div>

      
          <Link to="/products" className="hover:text-[#009E60] px-7" onClick={closeDropdowns}
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}>
           Products
          </Link>
          <Link1 spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} to="whoweare" className="hover:text-[#009E60] px-7" onClick={closeDropdowns}>
            Who we are
          </Link1>
          <Link to="/research" className="hover:text-[#009E60] px-7" onClick={closeDropdowns}
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}>
            Research
          </Link>
          <Link to="/healthcare" className="hover:text-[#009E60] px-7" onClick={closeDropdowns}>
            Healthcare
          </Link>
        </nav>
      </div>

      <div className="md:hidden flex lg:hidden text-white  ">
            {menu ? <AiOutlineClose className="ml-[1rem]" size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} className="ml-[1rem]" />}
          </div>
          <div
          className={` ${menu ? "translate-x-0" : "-translate-x-full "} lg:hidden flex flex-col absolute bg-white backdrop-blur backdrop-filter  border border-gray-100 border-opacity-15 mx-auto transition transform duration-500 left-[-1%] top-[110px] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit `}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <div
            className="relative group"
            onClick={handleServicesDropdown}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-[#009E60] px-7 focus:outline-none ml-[150px]">
              Services <IoIosArrowDown className=" ml-[5px]" />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 items-left bg-white backdrop-blur backdrop-filter p-5 border border-gray-100 rounded shadow max-w-[1000px]" onMouseEnter={handleServicesDropdown}>
                <Link to="/digital" className="block px-5 py-2 hover:bg-[#00755E] text-black hover:text-white rounded-[8px]">
                Digital Signal processing using TI processors
                </Link>
                <Link to="/embedded" className="block px-4 py-2  text-black hover:text-white  hover:bg-[#00755E] rounded-[8px]">
                Embedded Systems
                </Link>
                <Link to="/consultancy" className="block px-4 py-2  text-black hover:text-white  hover:bg-[#00755E] rounded-[8px]">
                Engineering Consultancy
                </Link>
                <Link to="/modules" className="block px-4 py-2  text-black hover:text-white  hover:bg-[#00755E] rounded-[8px]">
                High volatge Magnetron Driver modules
                </Link>
                <Link to="/stm32" className="block px-4 py-2  text-black hover:text-white  hover:bg-[#00755E] rounded-[8px]">
                Stm32 based projects
                </Link>
                <Link to="/metals" className="block px-4 py-2  text-black hover:text-white  hover:bg-[#00755E]  rounded-[8px]">
                Bare metals and build route programming
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link>

          <Link1
            to="whatwedo"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            what we do
          </Link1>
          <Link1
            to="whoweare"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            who we are
          </Link1>
          <Link
            to="/research"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Research
          </Link>
          <Link
            to="/healthcare"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#00755E] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Health care
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
