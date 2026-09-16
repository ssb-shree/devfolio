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
    bg: "#1D3026",
    text: "#BC7A35",
    border: "#BC7A35",
  },
  {
    section: "techstack",
    bg: "#BC7A35",
    text: "#1D3026",
    border: "#1D3026",
  },
  {
    section: "footer",
    bg: "#ffffff",
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
