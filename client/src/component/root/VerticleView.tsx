"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";

import { useScrollProgressStore } from "@/store/scroll";
import Navbar from "./vertical/Navbar";
import Hero from "./vertical/Hero";
import About from "./vertical/About";
import Projects from "./vertical/Projects";
import TechStack from "./vertical/TechStack";
import Footer from "./vertical/Footer";

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
    <div ref={wrapperRef} className="xl:hidden h-screen w-screen overflow-hidden">
      <div ref={contentRef} className="h-full w-full flex flex-col">
        <Navbar />
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
