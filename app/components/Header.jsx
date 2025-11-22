import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center  mx-auto h-screen flex flex-col    items-center justify-center  gap-4 ">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className=" flex justify-center"
        >
          <Image
            alt=""
            src={assets.profile_img}
            className=" rounded-full w-40 "
          />
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <h3 className="flex text-center gap-2  items-end text-xl md:text-2xl my-3 ">
            Hi! I’m William Mark{" "}
            <Image alt="" src={assets.hand_icon} className="w-6" />
          </h3>
        </motion.div>
        <motion.h1
         initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl mb-4 lg:text-[66px] font-medium">
          Frontend Web Developer based in London.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-center">
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </motion.p>
        <div className="flex  flex-col sm:flex-row items-center gap-4 mt-4 mx-auto justify-center ">
          <motion.a
           initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
            className="px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-white/50"
            href="#contact"
          >
            Connect with me{" "}
            <Image alt="" src={assets.right_arrow_white} className="w-4" />
          </motion.a>
          <motion.a
           initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
            className=""
            href="#sample-resume.pdf "
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
          >
            My resume
            <Image alt="" src={assets.download_icon} className="w-4" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
