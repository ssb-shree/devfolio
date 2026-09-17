"use client";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import CustomPointer from "../CustomPointer";
import { sections } from "@/store/scroll";
import { useRef } from "react";

const About = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="shrink-0 bg-orange-200 text-[#351010] w-[105%] h-full flex justify-center items-center"
    >
      About
    </div>
  );
};

export default About;
