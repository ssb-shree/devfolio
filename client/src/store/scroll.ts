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
    section: "projects",
    bg: "#56041A",
    text: "#E21438",
    border: "#BC7A35",
  },
  {
    section: "techstack",
    bg: "#E21438",
    text: "#56041A",
    border: "#1D3026",
  },
  {
    section: "footer",
    bg: "#E2E8F0",
    text: "#000000",
    border: "#000000",
  },
];

export const useScrollProgressStore = create<ScrollStore>()((set) => ({
  progress: 0,
  setProgress: (progress) => set(() => ({ progress })),
  currentContentIndex: 0,
  setCurrentContent: (index) => set(() => ({ currentContentIndex: index, currentContent: sections[index] })),
  currentContent: sections[0],
}));
