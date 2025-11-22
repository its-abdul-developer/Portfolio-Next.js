import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="service"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {" "}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-4 text-xl"
      >
        What i offers
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-medium"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10"
      >
        {serviceData.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-14 cursor-pointer hover:bg-[#fcf4ff] transition hover:-translate-y-1 duration-300 hover:shadow-[4px_4px_0_#000] dark:border-white dark:hover:bg-[#3b0d5c]/50 dark:hover:shadow-white dark:text-white"
          >
            <Image alt="" src={service.icon} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white">
              {service.description}
            </p>
            <a
              className="flex items-center gap-2 text-sm mt-5 dark:text-white"
              href={service.link}
            >
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
