"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/component/root/Navbar";
import Hero from "@/component/root/Hero";
import About from "@/component/root/About";
import Projects from "@/component/root/Projects";
import TechStack from "@/component/root/TechStack";
import Footer from "@/component/root/Footer";
import { useScrollProgressStore } from "@/store/scroll";

export default function HorizontalView() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { setProgress, setCurrentContent } = useScrollProgressStore();

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      orientation: "horizontal",
      gestureOrientation: "both",
    });

    const handleScroll = ({ progress }: { progress: number }) => {
      const progressPercentage = progress * 100;

      const sectionIndex = Math.min(Math.floor(progressPercentage / 25), 4);

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
  }, []);

  return (
    <div ref={wrapperRef} className="hidden md:flex h-screen w-screen overflow-hidden">
      <div ref={contentRef} className="flex h-screen w-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
