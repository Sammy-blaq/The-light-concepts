import { Link } from "react-router-dom";

// ICONS
import { CiLogin } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// COMPONENTS
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";

import { useRef } from "react";

const Header = () => {
  // For mobile button open and close
  const headerRef = useRef(null);
  const handleMobileButton = () => {
    headerRef.current.classList.toggle("nav-open");
  };

  const handleMobileClose = () => {
    headerRef.current.classList.toggle("nav-open");
  };

  return (
    <header
      ref={headerRef}
      className="main-header h-28 px-4 lg:px-16 group/nav flex items-center justify-between gap-[2.4rem] bg-[#f5f5db] sticky top-0 z-50 w-full shadow-sm"
    >
      <Logo path="/" />

      {/*  Making the mobile nav work  */}
      <nav className="maim-nav flex flex-col items-center pt-40 absolute top-0 right-0 w-full gap-20 translate-x-full h-dvh px-8 transition-all duration-500 ease-in bg-[#f5f5db] opacity-0 pointer-events-none invisible backdrop-blur-sm group-[.nav-open]/nav:opacity-100 group-[.nav-open]/nav:pointer-events-auto group-[.nav-open]/nav:visible group-[.nav-open]/nav:translate-x-0 lg:visible lg:pointer-events-auto lg:opacity-100 lg:pt-0 lg:p-0 lg:h-auto lg:translate-x-0 lg:w-auto lg:gap-20 lg:flex lg:flex-row lg:items-center lg:justify-between lg:relative z-10">
        <Link
          to="/index"
          className="flex items-center gap-3 text-[#504230] tracking-wide font-bold text-[1.6rem] capitalize lg:hidden"
        >
          <ion-icon
            name="camera"
            className="text-[#8a775c] text-[2.6rem]"
          ></ion-icon>
          Pixel Perfect Prints
        </Link>
        <nav className="flex gap-10 items-center">
          <ul className="flex flex-col text-center gap-12 text-[1.8rem] text-[#8a775c] font-medium lg:flex-row lg:gap-8 lg:text-[1.4rem]">
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/order">Order a Print</Link>
            </li>
            <li>
              <Link to="/booking">Book a session</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex items-center text-[#8a775c]">
          <ul className="flex flex-col gap-8 items-center text-[1.8rem] font-medium lg:flex-row lg:text-[1.4rem] lg:gap-4">
            <li>
              <Link
                to="/sign-in"
                className="flex items-center gap-6 text-[#504230] px-6 py-4 rounded-lg hover:bg-[#bdb76b] transition-colors duration-500 ease-in-out"
              >
                <CiLogin className="text-[1.6rem]" />
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="flex items-center gap-6 bg-[#9c7f5c] text-[#f6f4ee] px-6 py-4 rounded-lg hover:bg-[#af9674] transition-colors duration-500 ease-in-out"
              >
                <IoIosPersonAdd className="text-[1.6rem]" />
                Sign Up
              </Link>
            </li>
          </ul>
          <ul className="hidden">
            <li>
              <Link to="#">
                <CgProfile className="" />
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="p-8 rounded-2xl w-full text-white bg-[#a68b64] lg:hidden "
          onClick={handleMobileClose}
        >
          Close
        </button>
      </nav>
      {/* Mobile button (visible in 1024px) */}

      <button
        onClick={handleMobileButton}
        className="btn-mobile-nav p-4 border border-[#d8d8b2] rounded-md cursor-pointer lg:hidden"
      >
        <IoMdMenu
          className="icon-mobile-nav group-[.nav-open]/nav:hidden"
          name="menu-outline"
        />
        <IoMdClose
          className="icon-mobile-nav hidden group-[.nav-open]/nav:block group-[.nav-open]/nav:border group-[.nav-open]/nav:rounded-md group-[.nav-open]/nav:p-4 group-[.nav-open]/nav:border-[#a68b64]"
          name="close-outline"
        />
      </button>
      {/* <HeaderButton onClick={handleMobileButton} /> */}
    </header>
  );
};

export default Header;
