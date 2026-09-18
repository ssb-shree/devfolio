"use client";

import { titleFont } from "@/app/layout";

import { motion } from "motion/react";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const projects = ["Ojus Cultural Fest", "TeamType Webapp", "Masc Webapp", "Dsa Webapp", "Extra"];
const Projects = () => {
  const [select, setSelect] = useState<string | null>(null);
  return (
    <div className="shrink-0 projects bg-[#351010] text-[#FFD6A7] min-w-full h-full flex justify-center items-center p-5 gap-x-10">
      <div className=" w-[35%] h-full flex flex-col justify-between items-center">
        <div className="h-full w-full py-10">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1,
            }}
            className={`${titleFont.className} text-2xl uppercase`}
          >
            Explore Projects
          </motion.p>
        </div>
        <div className="border border-current h-[70%] w-full flex justify-center items-center">
          {select && `${select} Image`}
        </div>
      </div>
      <div className=" w-[40%] h-full py-10 flex flex-col justify-between">
        <h1 className={`${titleFont.className} text-lg uppercase text-right w-full`}>selected work</h1>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col text-6xl font-bold "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              whileHover="hover"
              className="group relative w-full border-b border-current overflow-hidden"
            >
              <motion.div
                variants={{
                  hover: {
                    x: 8,
                    transition: {
                      duration: 0.66,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="flex items-center"
              >
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.33,
                    delay: index * 0.22,
                  }}
                  onMouseEnter={() => setSelect(project)}
                  onMouseLeave={() => setSelect(null)}
                  className="flex flex-row gap-x-5 w-full leading-tight text-6xl uppercase select-none"
                >
                  {project}
                </motion.h2>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                variants={{
                  hover: {
                    scaleX: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-current"
              />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-lg flex flex-col w-full text-right">
          <span>Most of what I learn comes from building.</span> <span>Here's some of what I've built.</span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
