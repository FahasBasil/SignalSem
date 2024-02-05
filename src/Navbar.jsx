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
    <div className={`fixed bg-white w-full bg-opacity-5 backdrop-filter backdrop-blur h-[100px] border border-gray-100 border-opacity-15 mx-auto transition transform duration-300 ${scrolling ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="flex items-center  text-white justify-between mx-[80px] mt-[25px]">
        <Link
        to="/"
        >
        <h1 className="ml-[10px] text-2xl text-white">
          <span className="text-4xl font-bold">S</span>ignal semitech
        </h1>
        </Link>

        
        
        {/* Navbar */}
        <nav className="flex ml-[50px] cursor-pointer hidden md:flex">
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

      <div className="md:hidden flex  ml-[500px] text-white  ">
            {menu ? <AiOutlineClose  size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} />}
          </div>
          <div
          className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white border mt-[30px] border-white bg-opacity-20 backdrop-blur backdrop-filter text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#E58411] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#E58411] transition-all cursor-pointer"
           
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#E58411] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#E58411] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
