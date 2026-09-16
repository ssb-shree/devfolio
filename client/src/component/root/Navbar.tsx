"use client";

import { motion } from "motion/react";

import VerticleText from "../VerticleText";
import { useScrollProgressStore } from "@/store/scroll";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { currentContent } = useScrollProgressStore();
  const emojis = ["🦥", "🧿", "🗿", "🌀", "🛸", "🐌", "🍂", "🕯️", "☄️", "🐈", "🦉"];

  return (
    <div className="fixed shrink-0 w-full md:w-[5%] h-[5%] md:h-full pt-5 px-4 md:pt-0 md:px-4">
      <motion.nav
        animate={{
          backgroundColor: currentContent.bg,
          color: currentContent.text,
          borderRightColor: currentContent.border,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full bg-[#351010] text-[#FFD6A7] h-full flex md:flex-col justify-center md:justify-between items-center pb-5 border-r"
      >
        <button className="md:border-b border-current w-[10%] h-[10%] md:w-full flex flex-col justify-center items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                backgroundColor: currentContent.text,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.33,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[60%] h-0.5 mt-0.5 origin-left"
            />
          ))}
        </button>

        <div className="h-full w-full hidden md:flex flex-col justify-center items-center uppercase">
          <VerticleText text={currentContent.section} />
        </div>

        <div className="h-full w-full flex md:hidden flex-col justify-center items-center uppercase">
          {currentContent.section}
        </div>

        <span className="text-xl hover:cursor-grab">{emojis[Math.floor(Math.random() * emojis.length)]}</span>
      </motion.nav>
    </div>
  );
};

export default Navbar;
