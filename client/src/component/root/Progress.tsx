"use client";

import { useScrollProgressStore } from "@/store/scroll";
import { motion } from "motion/react";

const ProgressBar = () => {
  const { progress, currentContent } = useScrollProgressStore();

  return (
    <motion.div
      animate={{
        background: currentContent.text,
      }}
      style={{
        background: currentContent.text,
        width: `${progress}%`,
      }}
      className="fixed top-0 h-0.75"
    />
  );
};

export default ProgressBar;
