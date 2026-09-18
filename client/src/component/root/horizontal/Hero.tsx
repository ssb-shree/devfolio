"use client";

import { titleFont } from "@/app/layout";

import { useRouter } from "next/navigation";
import { useRef } from "react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

import { motion } from "motion/react";
import DynamicText from "@/component/DynamicText";

export const socials = [
  {
    name: "github",
    link: "https://github.com/ssb-shree",
    icon: <FaGithub size={30} />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/sde-shree",
    icon: <FaLinkedin size={30} />,
  },
  {
    name: "x",
    link: "https://x.com/sde.shree",
    icon: <FaXTwitter size={30} />,
  },
];

const Hero = () => {
  const router = useRouter();
  const parentRef = useRef(null);

  return (
    <div
      ref={parentRef}
      className="shrink-0 md:ml-[5%] text-orange-200 bg-[#351010] w-[95%] h-full flex flex-col justify-center items-start p-3"
    >
      <div className="h-[80%] w-full flex flex-row justify-between items-start py-10">
        <div className="h-full flex justify-start items-start w-[60%]">
          <h1 className={`${titleFont.className} flex flex-col text-9xl uppercase`}>
            <div className="flex overflow-hidden">
              {"shree".split("").map((t, i) => (
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.33,
                    delay: 0.22,
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex overflow-hidden">
              {"bavachikar".split("").map((t, i) => (
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.33,
                    delay: 0.22,
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </h1>
        </div>
        <div className="h-full flex flex-col justify-start items-start w-[40%] text-lg  p-3 text-orange-200/80">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.22,
            }}
          >
            Developer based in
            <span className="underline mx-1 capitalize underline-offset-2 hover:cursor-pointer">Mumbai</span>,
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: 2 * 0.22,
            }}
            className="text-wrap"
          >
            Turning ideas into useful, well-crafted digital experiences.
          </motion.span>
        </div>
      </div>

      <div className="h-[20%] w-full flex flex-row text-xl text-orange-200/80">
        <DynamicText />
        <div className="h-full w-full flex justify-start items-center text-left">
          <Link
            href={"https://www.linkedin.com/in/sde-shree/"}
            className="flex flex-col capitalize hover:cursor-pointer"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.33,
              }}
              className="underline underline-offset-3"
            >
              open for work
            </motion.span>
          </Link>
        </div>
        <div className="h-full w-full flex flex-row justify-start items-center gap-x-10">
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

export default Hero;
