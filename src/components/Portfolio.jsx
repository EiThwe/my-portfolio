import React from "react";
import ProjectCard from "./ProjectCard";
import { projectCardData } from "../utils/projectCardData";

const Portfolio = () => {
  return (
    <section className="w-full min-h-full flex justify-center items-center">
      <div className="w-full h-full text-white ">
        <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
          Portfolio
        </h6>
        <h3 className="ml-2 text-[37px] tracking-tighter mb-5">
          Selected Work
        </h3>
        <hr className="w-8 mb-5" />
        <p className="mb-10 text-[#7c7c7c] tracking-tight">
          This is a collection of my recent projects. Preview link and the tools
          that have been used can be seen on hover.
        </p>
        <div className="w-full flex flex-col gap-10">
          {projectCardData.map(({ image }, i) => (
            <ProjectCard image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
