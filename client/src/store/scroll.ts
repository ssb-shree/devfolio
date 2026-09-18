import { create } from "zustand";

type ScrollStore = {
  progress: number;
  setProgress: (progress: number) => void;
  currentContentIndex: number;
  setCurrentContent: (index: number) => void;
  currentContent: SectionOptions;
};

type SectionOptions = {
  section: string;
  bg: string;
  text: string;
  border: string;
};

export const sections: SectionOptions[] = [
  {
    section: "hero",
    bg: "#351010",
    text: "#FFD6A7",
    border: "#FFD6A7",
  },
  {
    section: "about",
    bg: "#FFD6A7",
    text: "#351010",
    border: "#351010",
  },
  {
    section: "hero",
    bg: "#351010",
    text: "#FFD6A7",
    border: "#FFD6A7",
  },
  {
    section: "about",
    bg: "#FFD6A7",
    text: "#351010",
    border: "#351010",
  },
  {
    section: "footer",
    bg: "#351010",
    text: "#FFD6A7",
    border: "#FFD6A7",
  },
];

export const useScrollProgressStore = create<ScrollStore>()((set) => ({
  progress: 0,
  setProgress: (progress) => set(() => ({ progress })),
  currentContentIndex: 0,
  setCurrentContent: (index) => set(() => ({ currentContentIndex: index, currentContent: sections[index] })),
  currentContent: sections[0],
}));
