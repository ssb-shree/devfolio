import { socials } from "./Hero";

import { motion } from "motion/react";
import Link from "next/link";
import { titleFont } from "@/app/layout";

const Footer = () => {
  return (
    <div className="bg-[#351010] text-[#FFD6A7] shrink-0 h-full w-full flex flex-col p-5 py-30 justify-center items-center">
      <div className=" w-full h-[70%] flex flex-row justify-center items-center">
        <div className=" h-full w-[70%] flex flex-col">
          <span className="lg:text-2xl">Contact At</span>
          <Link href={"#"} className="text-2xl lg:text-5xl underline underline-offset-2">
            shreessb92@gmail.com
          </Link>
        </div>
        <div className=" h-full w-[30%] p-5 gap-5 flex flex-col justify-end items-end"></div>
      </div>
      <div className=" border-current h-full w-full flex flex-col gap-y-10 justify-start items-start">
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
      <div className="flex flex-col border-current w-full h-[30%]">
        <div className=" h-full w-full flex flex-col justify-start items-start ">
          <span className={`${titleFont.className} text-lg lg:text-5xl uppercase`}>
            Hey, Hope you enjoyed the little journey.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
