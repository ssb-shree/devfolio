"use client";

import { motion } from "motion/react";

import VerticleText from "../../VerticleText";
import { useScrollProgressStore } from "@/store/scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const { currentContent } = useScrollProgressStore();

  return (
    <div className="fixed shrink-0 w-full h-[5vh] z-20">
      <motion.nav
        animate={{
          backgroundColor: currentContent.bg,
          color: currentContent.text,
          borderRightColor: currentContent.border,
        }}
        transition={{
          duration: 0.1,
        }}
        className=" bg-[#351010] text-[#FFD6A7] w-full h-full flex justify-between items-center border-current border-b-2 pl-2"
      >
        <button className=" h-full flex flex-col justify-center p-1 items-center gap-1">
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
            <FaCode size={40} />
          </motion.div>
        </button>

       

        <span className="text-xl h-full hover:cursor-grab">
          <DotLottieReact src="/CatMovement.lottie" loop autoplay />
        </span>
      </motion.nav>
    </div>
  );
};

export default Navbar;
