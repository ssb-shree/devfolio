"use client";
import { titleFont } from "@/app/layout";
import { TypingAnimation } from "@/components/ui/typing-animation";

import { motion } from "motion/react";

const About = () => {
  return (
    <div className="shrink-0 bg-orange-200 text-[#351010] w-[105%] h-full flex justify-around items-center p-5">
      <div className="w-[30%] h-full flex flex-col-reverse justify-between items-start py-10">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
          }}
          className={`${titleFont.className} text-2xl uppercase`}
        >
          about me
        </motion.h1>
        <motion.span className="text-lg text-[#351010]/70">
          Building thoughtful digital exderiences through code, design, and curiosity.
        </motion.span>
      </div>
      <div className="w-[40%] h-full py-10 px-3">
        <div className="">
          <span className="uppercase flex overflow-hidden text-[#351010]/70">Quick Intro</span>
          <p className="font-bold text-4xl">
            Hi, I'm Shree, a <span className="underline underline-offset-2 capitalize">developer</span> focused on
            thoughtful digital experiences, <span className="underline underline-offset-2 capitalize">creative</span>{" "}
            interfaces, and building things that matter.
          </p>
        </div>
        <div className="h-full w-full flex flex-col mt-5 justify-start items-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.33,
            }}
            className=" bg-[#351010] h-[65%] w-[55%]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
