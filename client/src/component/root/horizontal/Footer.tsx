import { socials } from "./Hero";

import { motion } from "motion/react";
import Link from "next/link";
import { Michroma } from "next/font/google";
import { titleFont } from "@/lib/font";

const Footer = () => {
  return (
    <div className="bg-[#351010] text-[#FFD6A7] shrink-0 h-full w-full flex flex-col p-5 pl-20 justify-center items-center">
      <div className=" w-full h-[70%] flex flex-row justify-center items-center">
        <div className=" h-full w-[70%] p-5 flex flex-col">
          <span>Contact At</span>
          <Link href={"#"} className="text-2xl underline underline-offset-2">
            shreessb92@gmail.com
          </Link>
        </div>
        <div className=" h-full w-[30%] p-5 gap-5 flex flex-col justify-end items-end"></div>
      </div>
      <div className="flex flex-row border-current w-full h-[30%]">
        <div className=" h-full w-[60%] flex flex-col justify-center items-start p-5 ">
          <span className={`${titleFont.className} text-2xl uppercase`}>Hey, Hope you enjoyed the little journey.</span>
        </div>
        <div className=" border-current h-full w-[40%] flex gap-x-10 justify-center items-center">
          {socials.map((social, i) => (
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.33,
                delay: i * 0.22,
              }}
            >
              <Link href={social.link}>{social.icon}</Link>
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
