import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setisDarkMode }) => {
  const sideMenuRef = useRef(null);

  const [isScroll, setisScroll] = useState(false);

  const openSideMenu = () => {
    sideMenuRef.current.style.right = 0;
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.right = "-64%";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed  top-0 right-0 w-11/12 -z-10 translate-y-[-78%] dark:hidden">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>
      <nav
        className={` w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between py-4 z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkBg dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            alt=""
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14 cursor-none"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="" href="#service">
              Services
            </a>
          </li>
          <li>
            <a className="" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setisDarkMode((prev) => !prev)}
            className="cursor-pointer"
          >
            <Image
              alt=""
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6"
            />
          </button>

          <a
            href="#contact "
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            {" "}
            Contact{" "}
            <Image
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          <button
            onClick={openSideMenu}
            className="cursor-pointer block md:hidden ml-3"
          >
            <Image
              alt=""
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-200 transition-all ease-linear duration-300 dark:bg-[#2C084C] dark:text-white"
        >
          <div>
            <Image
              alt=""
              onClick={closeSideMenu}
              src={isDarkMode ? assets.close_white : assets.close_black}
              className="w-6 absolute top-6 right-6 cursor-pointer"
            />
          </div>

          <li>
            <a onClick={closeSideMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeSideMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeSideMenu} href="#service">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeSideMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeSideMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
