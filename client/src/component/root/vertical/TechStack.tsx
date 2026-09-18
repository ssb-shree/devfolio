"use client";

import { titleFont } from "@/lib/font";
import { TypingAnimation } from "@/components/ui/typing-animation";

import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaJava,
  FaRobot,
  FaGolang,
} from "react-icons/fa6";

import { BsTypescript } from "react-icons/bs";
import { PiComputerTowerFill } from "react-icons/pi";
import { CiCloudOn } from "react-icons/ci";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

import { ReactNode, useState } from "react";
import { motion } from "motion/react";

type TechStackType = {
  category: string;
  items: {
    name: string;
    icon: ReactNode;
  }[];
};

const techStack: TechStackType[] = [
  {
    category: "languages",
    items: [
      { name: "JavaScript", icon: <FaJs size={30} /> },
      { name: "TypeScript", icon: <BsTypescript size={30} /> },
      { name: "Python", icon: <FaPython size={30} /> },
      { name: "SQL", icon: <FaDatabase size={30} /> },
      { name: "Java", icon: <FaJava size={30} /> },
      { name: "Go", icon: <FaCode size={30} /> },
    ],
  },
  {
    category: "frameworks",
    items: [
      { name: "React", icon: <FaReact size={30} /> },
      { name: "Next.js", icon: <FaReact size={30} /> },
      { name: "Node.js", icon: <FaNodeJs size={30} /> },
      { name: "Express", icon: <FaNodeJs size={30} /> },
      { name: "Bun.js", icon: <FaGolang size={30} /> },
      { name: "MongoDB", icon: <SiMongodb size={30} /> },
      { name: "Socket.io", icon: <TbBrandSocketIo size={30} /> },
    ],
  },
  {
    category: "tools",
    items: [
      { name: "Git", icon: <FaGitAlt size={30} /> },
      { name: "GitHub", icon: <FaGithub size={30} /> },
      { name: "GenAi", icon: <FaRobot size={30} /> },
    ],
  },
  {
    category: "coursework",
    items: [
      { name: "DBMS", icon: <FaDatabase size={30} /> },
      { name: "System Design", icon: <FaCode size={30} /> },
      { name: "Data Structures", icon: <FaCode size={30} /> },
      { name: "Operating Systems", icon: <PiComputerTowerFill size={30} /> },
      { name: "Computer Networks", icon: <CiCloudOn size={30} /> },
      { name: "AIML", icon: <FaRobot size={30} /> },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="shrink-0 techstack text-[#56041a] bg-[#FFD6A7] w-full h-full flex flex-col justify-center items-center pt-15 pb-px">
      <div className="w-full flex flex-row justify-center items-center">
        <h1 className={`${titleFont.className} text-lg lg:text-5xl uppercase`}>
          <span>techstack</span>
          <span>-</span>
          <TypingAnimation loop as="span" words={["web dev", "frontend", "backend", "full stack", "aiml"]} />
        </h1>
      </div>
      <div className="flex flex-col border-current h-full w-full">
        {techStack.map((stack, index) => (
          <TechBlock stack={stack} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

const TechBlock = ({ stack, index }: { stack: TechStackType; index: number }) => {
  return (
    <div className="border-b border-current w-full h-[25%] flex flex-row justify-start items-center px-2">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
          delay: index * 0.22,
        }}
        className="flex flex-row justify-start items-end h-full w-full uppercase text-xl lg:text-4xl"
      >
        {stack.category}
      </motion.div>
      <div className="flex flex-wrap items-end justify-start gap-x-2 h-full w-full text-xl lg:text-4xl">
        {stack.items.map(({ name, icon }, index) => (
          <span className="flex items-center gap-1">
            {name}
            {index < stack.items.length - 1 && ","}
          </span>
        ))}
      </div>
    </div>
  );
};
