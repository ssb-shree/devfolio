import React from "react";

const VerticleText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {text.length > 1 ? text
        .split("")
        .reverse()
        .map((txt, index) => (
          <span key={index} className="text-lg leading-none -mb-1 -rotate-90">
            {txt}
          </span>
        )) : <span className="text-lg leading-none -mb-1 -rotate-90">{text}</span>}
    </div>
  );
};

export default VerticleText;
