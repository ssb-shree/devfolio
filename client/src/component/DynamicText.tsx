"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function DynamicText() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.33,
      }}
      className="h-full w-full flex justify-start items-center uppercase"
    >
      <TypingAnimation showCursor={false} loop as="span" words={["software", "developer", "engineer"]} />
    </motion.div>
  );
}
