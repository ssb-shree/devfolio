"use client";

import { motion } from "motion/react";

import VerticleText from "../../VerticleText";
import { useScrollProgressStore } from "@/store/scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const { progress, currentContent } = useScrollProgressStore();

  return (
    <div className="fixed shrink-0 z-20 w-[5%] h-full">
      <motion.nav
        animate={{
          backgroundColor: currentContent.bg,
          color: currentContent.text,
          borderRightColor: currentContent.border,
        }}
        transition={{
          duration: 0.1,
        }}
        className="w-full bg-[#351010] text-[#FFD6A7] h-full flex md:flex-col justify-center md:justify-between items-center border-current border-r-2 border-y-2"
      >
        <button className="border-b-2 border-current w-[10%] h-[10%] md:w-full flex flex-col justify-center items-center gap-1">
          {/* {[0, 1, 2].map((i) => (
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
          ))} */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.33,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=""
          >
            <FaCode size={30} />
          </motion.div>
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.22,
          }}
          className="h-full w-full hidden md:flex flex-col gap-y-5 justify-center items-center uppercase"
        >
          <VerticleText text={"portfolio"} />
        </motion.div>
        <div className="h-full w-full flex md:hidden flex-col justify-center items-center uppercase">portfolio</div>

        <span className="text-xl hover:cursor-grab">
          <DotLottieReact src="/CatMovement.lottie" loop autoplay />
        </span>
      </motion.nav>
    </div>
  );
};

export default Navbar;
