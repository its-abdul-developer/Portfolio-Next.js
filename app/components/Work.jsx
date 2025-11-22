import { IoIosSend } from "react-icons/io";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const workData = [
    {
      title: "Frontend project",
      description: "Web Design",
      bgImage:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
      send: <IoIosSend />,
    },
    {
      title: "Geo based app",
      description: "Mobile App",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      send: <IoIosSend />,
    },
    {
      title: "Photography site",
      description: "Web Design",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      send: <IoIosSend />,
    },
    {
      title: "UI/UX designing",
      description: "UI/UX Design",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1733306548826-95daff988ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMkZ1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      send: <IoIosSend />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {" "}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-4 text-xl"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-medium"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>
      <motion.div 
      
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10">
        {workData.map((projects, index) => (
          <motion.div
          whileHover={{scale: 1.05}}
          transition={{duration:0.3}}
            key={index}
            className="h-80 rounded-lg  border border-gray-400 cursor-pointer relative group"
            style={{
              backgroundImage: `url(${projects.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="px-5 bg-white rounded-md absolute w-11/12 flex items-center justify-between bottom-5 left-1/2 -translate-x-1/2 py-3 group-hover:bottom-7 transition-all duration-300">
              <div>
                <h2 className="font-semibold dark:text-black">
                  {projects.title}
                </h2>
                <p className="text-gray-700 text-sm">{projects.description}</p>
              </div>
              <div className="text-2xl border rounded-full p-2.5 border-gray-500 shadow-[2px_2px_0_#000] transition group-hover:bg-[#d8fc68] dark:text-black">
                {projects.send}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto mt-20 hover:bg-[#fcf4ff] duration-500 group dark:text-white dark:border-white dark:hover:bg-[#5a1a72]"
      >
        Show more{" "}
        <Image
          alt="right arrow"
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          className="w-5 group-hover:translate-x-2 transition-all ease-linear duration-300"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
