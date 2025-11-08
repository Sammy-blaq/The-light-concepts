"use strict";

// ICONS
import { CiLogin } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";

// COMPONENTS
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import Button from "./Button";
import ProfileBox from "./ProfileBox";

import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // For mobile button open and close
  const headerRef = useRef(null);
  const handleMobileButton = () => {
    headerRef.current.classList.toggle("nav-open");
  };

  const handleMobileClose = () => {
    headerRef.current.classList.toggle("nav-open");
  };

  // DISPLAY PROFILE COMPONENT WHEN CLICKING THE PROFILE BUTTON
  const profileComponentRef = useRef(null);
  const handleProfileButton = () => {
    profileComponentRef.current.classList.toggle("hidden");
  };

  return (
    <header
      ref={headerRef}
      className="main-header h-28 px-4 lg:px-16 group/nav flex items-center justify-between gap-[2.4rem] bg-secondary sticky top-0 z-50 w-full shadow-sm"
    >
      <Logo path="/" />

      {/*  Making the mobile nav work  */}
      <nav className="maim-nav flex flex-col items-center pt-40 absolute top-0 right-0 w-full gap-20 translate-x-full h-dvh px-8 transition-all duration-500 ease-in bg-secondary opacity-0 pointer-events-none invisible backdrop-blur-sm group-[.nav-open]/nav:opacity-100 group-[.nav-open]/nav:pointer-events-auto group-[.nav-open]/nav:visible group-[.nav-open]/nav:translate-x-0 lg:visible lg:pointer-events-auto lg:opacity-100 lg:pt-0 lg:p-0 lg:h-auto lg:translate-x-0 lg:w-auto lg:gap-20 lg:flex lg:flex-row lg:items-center lg:justify-between lg:relative z-10">
        <Link
          to="/index"
          className="flex items-center gap-3 text-text-foreground tracking-wide font-bold text-[1.6rem] capitalize lg:hidden"
        >
          <CiCamera className="text-muted-foreground text-[2.6rem]" />
          The Light concepts
        </Link>
        <nav className="flex gap-10 items-center">
          <ul className="flex flex-col text-center gap-12 text-[1.8rem] text-muted-foreground font-medium lg:flex-row lg:gap-8 lg:text-[1.4rem]">
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
        <nav className="flex items-center text-muted-foreground">
          <ul className="flex flex-col gap-8 items-center text-[1.8rem] font-medium lg:flex-row lg:text-[1.4rem] lg:gap-4">
            <li>
              <Link
                to="/sign-in"
                className="flex items-center gap-6 text-text-foreground px-6 py-4 rounded-lg hover:bg-tertiary transition-colors duration-500 ease-in-out"
              >
                <CiLogin className="text-[1.6rem]" />
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="flex items-center gap-6 bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/80 transition-colors duration-500 ease-in-out"
              >
                <IoIosPersonAdd className="text-[1.6rem]" />
                Sign Up
              </Link>
            </li>
          </ul>

          {/* TODO 
          Should be visible from lg: above when user is logged in
          
          */}
          <ul className="hidden relative">
            <li>
              <Button
                className={
                  "flex items-center gap-6 text-[#9c7f5c]  bg-[#e4e4cc] h px-6 py-6 rounded-[50%] hover:bg-[#e4e4cc]/40 transition-colors duration-500 ease-in-out cursor-pointer z-0"
                }
                icon={<IoIosPerson className="" />}
                onClick={handleProfileButton}
              ></Button>
              <ProfileBox
                title={"My Account"}
                email={"you@example.com"}
                icon={<CiLogout />}
                text={"Log out"}
                ref={profileComponentRef}
              />
            </li>
          </ul>
        </nav>

        {/* TODO shoud be visible (flex) when the user is logged in and from sm: downward in the mobile nav button */}
        <ul className="hidden relative flex-col items-center  border-t border-border w-full ">
          <li className="">
            <Link
              to="/profile"
              className="flex items-center gap-4 w-full cursor-pointer p-3 rounded-lg hover:bg-tertiary text-text-foreground m-2 transition-all duration-300 ease-in"
            >
              <IoIosPerson /> Profile
            </Link>
          </li>
          <li>
            <button
              className={
                "flex items-center gap-4 w-full cursor-pointer p-3 rounded-lg hover:bg-tertiary text-text-foreground m-2 transition-all duration-300 ease-in"
              }
            >
              <CiLogout /> Sign Out
            </button>
          </li>
        </ul>

        <button
          className="p-8 rounded-2xl w-full text-white bg-primary lg:hidden "
          onClick={handleMobileClose}
        >
          Close
        </button>
      </nav>
      {/* Mobile button (visible in 1024px) */}

      <button
        onClick={handleMobileButton}
        className="btn-mobile-nav p-4 border border-primary rounded-md cursor-pointer lg:hidden"
      >
        <IoMdMenu
          className="icon-mobile-nav group-[.nav-open]/nav:hidden"
          name="menu-outline"
        />
        <IoMdClose
          className="icon-mobile-nav hidden group-[.nav-open]/nav:block group-[.nav-open]/nav:border group-[.nav-open]/nav:rounded-md group-[.nav-open]/nav:p-4 group-[.nav-open]/nav:border-primary z-9999"
          name="close-outline"
        />
      </button>
      {/* <HeaderButton onClick={handleMobileButton} /> */}
    </header>
  );
};

export default Header;
