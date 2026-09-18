"use client";
import { titleFont } from "@/lib/font";
import { TypingAnimation } from "@/components/ui/typing-animation";

import { motion } from "motion/react";

const About = () => {
  return (
    <div className="shrink-0 bg-orange-200 text-[#351010] w-full h-full flex flex-col justify-between items-center py-10 px-4">
      {/* 1ST PARENT  */}
      <div className="w-full flex flex-col justify-between items-start pt-20">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
          }}
          className={`${titleFont.className} text-2xl lg:text-4xl uppercase`}
        >
          about me
        </motion.h1>
        <motion.span className="text-xl lg:text-2xl text-[#351010]/70">
          Building thoughtful digital exderiences through code, design, and curiosity.
        </motion.span>
      </div>

      {/* 2ND PARENT  */}
      <div className="w-full h-full flex flex-col justify-around items-center">
        {/* QUICK INTRO  */}
        <div className="w-full">
          <span className="uppercase text-[#351010]/70 text-sm lg:text-4xl">Quick Intro</span>
          <p className="font-bold text-3xl lg:text-5xl lg:mt-5">
            Hi, I'm Shree, a <span className="underline underline-offset-2 capitalize">developer</span> focused on
            thoughtful digital experiences, <span className="underline underline-offset-2 capitalize">creative</span>{" "}
            interfaces, and building things that matter.
          </p>
        </div>

        {/* IMAGE  */}
        <div className="w-full h-1/2 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.33,
            }}
            className=" bg-[#351010] h-full w-[70%] lg:w-[40%]"
          >
            hello
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
