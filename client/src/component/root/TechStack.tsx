"use client";

import { titleFont } from "@/app/layout";
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
import { ReactNode, useState } from "react";
import { CiCloudOn } from "react-icons/ci";

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
      { name: "JavaScript", icon: <FaJs size={40} /> },
      { name: "Python", icon: <FaPython size={40} /> },
      { name: "SQL", icon: <FaDatabase size={40} /> },
      { name: "TypeScript", icon: <BsTypescript size={40} /> },
      { name: "Java", icon: <FaJava size={40} /> },
      { name: "Go", icon: <FaCode size={40} /> },
    ],
  },
  {
    category: "frameworks",
    items: [
      { name: "React", icon: <FaReact size={40} /> },
      { name: "Next.js", icon: <FaReact size={40} /> },
      { name: "Node.js", icon: <FaNodeJs size={40} /> },
      { name: "Express", icon: <FaNodeJs size={40} /> },
      { name: "Bun.js", icon: <FaGolang size={40} /> },
      { name: "MongoDB", icon: <FaDatabase size={40} /> },
    ],
  },
  {
    category: "tools",
    items: [
      { name: "Git", icon: <FaGitAlt size={40} /> },
      { name: "GitHub", icon: <FaGithub size={40} /> },
      { name: "GenAi", icon: <FaRobot size={40} /> },
    ],
  },
  {
    category: "coursework",
    items: [
      { name: "AIML", icon: <FaRobot size={40} /> },
      { name: "Data Structures", icon: <FaCode size={40} /> },
      { name: "DBMS", icon: <FaDatabase size={40} /> },
      { name: "Operating Systems", icon: <PiComputerTowerFill size={40} /> },
      { name: "Computer Networks", icon: <CiCloudOn size={40} /> },
      { name: "System Design", icon: <FaCode size={40} /> },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="shrink-0 techstack text-[#56041a] bg-[#E21438] min-w-full h-full flex flex-col justify-center items-center py-5 px-20">
      <div className="w-full h-[30%] flex flex-row justify-center items-center px-5">
        <h1 className={`${titleFont.className} text-5xl uppercase`}>
          <span>techstack</span>
          <span>-</span>
          <TypingAnimation loop as="span" words={["web dev", "frontend", "backend", "full stack", "aiml"]} />
        </h1>
      </div>
      <div className=" border-current h-full w-[95%]">
        {techStack.map((stack, index) => (
          <TechBlock stack={stack} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

const TechBlock = ({ stack, index }: { stack: TechStackType; index: number }) => {
  const [currentIcon, setCurrentIcon] = useState<ReactNode>(stack.items[0].icon);
  return (
    <div className="border-b border-current w-full h-[25%] flex flex-row justify-between items-center">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
          delay: index * 0.22,
        }}
        className="flex flex-row justify-start px-10 items-end h-full w-full uppercase text-5xl"
      >
        {stack.category}
      </motion.div>
      <div className="flex flex-wrap items-end justify-start gap-x-2 px-10 h-full w-full text-xl">
        {stack.items.map(({ name, icon }, index) => (
          <span onMouseEnter={() => setCurrentIcon(icon)} key={name} className="flex items-center gap-1">
            {name}
            {index < stack.items.length - 1 && ","}
          </span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row justify-center px-10 items-end h-full w-1/2 mb-1"
      >
        {currentIcon}
      </motion.div>
    </div>
  );
};
