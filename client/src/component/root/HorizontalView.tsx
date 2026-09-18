"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

import Navbar from "@/component/root/horizontal/Navbar";
import ProgressBar from "./horizontal/Progress";
import Hero from "@/component/root/horizontal/Hero";
import About from "@/component/root/horizontal/About";
import Projects from "@/component/root/horizontal/Projects";
import TechStack from "@/component/root/horizontal/TechStack";
import Footer from "@/component/root/horizontal/Footer";

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
      syncTouch: true,
    });

    const handleScroll = ({ progress }: { progress: number }) => {
      const progressPercentage = progress * 100;

      const sectionIndex = Math.min(Math.floor(progressPercentage / 25), 4);

      setCurrentContent(sectionIndex);
      setProgress(progress * 100);
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
    <div ref={wrapperRef} className="hidden xl:flex flex-col h-screen w-screen overflow-hidden">
      <div ref={contentRef} className="flex h-screen w-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Footer />
      </div>
      <ProgressBar />
    </div>
  );
}
