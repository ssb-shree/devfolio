"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";

import Hero from "@/component/root/Hero";
import About from "@/component/root/About";
import Projects from "@/component/root/Projects";
import TechStack from "@/component/root/TechStack";
import Footer from "@/component/root/Footer";

import { useScrollProgressStore } from "@/store/scroll";

const VerticleView = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { setProgress, setCurrentContent, currentContent } = useScrollProgressStore();

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,

      orientation: "vertical",
      gestureOrientation: "vertical",

      touchMultiplier: 1,
      smoothWheel: true,
      syncTouch: true,
    });

    const handleScroll = ({ progress }: { progress: number }) => {
      setProgress(progress * 100);

      const sectionIndex = Math.min(Math.floor(progress * 4.3), 5);

      setCurrentContent(sectionIndex);
    };

    lenis.on("scroll", handleScroll);

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [setProgress, setCurrentContent]);

  return (
    <div ref={wrapperRef} className="md:hidden h-screen w-screen overflow-hidden">
      <div ref={contentRef} className="h-full w-full flex flex-col">
        <div className="fixed top-0 shrink-0 w-full h-[10%]">
          <motion.nav
            animate={{
              backgroundColor: currentContent.bg,
              color: currentContent.text,
              borderRightColor: currentContent.border,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-full bg-[#351010] text-[#FFD6A7] h-full flex justify-center items-center border-b"
          >
            hello
          </motion.nav>
        </div>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
};

export default VerticleView;
