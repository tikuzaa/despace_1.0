import React from "react";
import { Reveal } from "./Reveal";
const Prizes = () => {
  return (
    <div className="min-h-screen relative bg-[#003b5e] flex items-center justify-center px-4">
      <div className="flex max-w-4xl">
        <div className="absolute h-[339px] w-[353px] right-[1rem] -top-[7rem]">
          <Reveal>
            <img
              src="/pfp/pull.png"
              alt=".."
              className="h-full w-full object-cover"
            />{" "}
          </Reveal>
        </div>

        <div className="flex-1 text-left m-4">
          <h2 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-oxanium font-bold text-white mb-10">
            <Reveal>Prizes</Reveal>
          </h2>
          <Reveal>
            <p className="text-slate-400 text-4xl sm:text-4xl md:text-6xl lg:text-8xl mb-4 w-full">
              Coming Soon !!
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
