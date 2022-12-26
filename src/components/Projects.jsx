import React, { useState } from "react";
import Project from "./Project";
import { data } from "../data/data";

const Projects = () => {
  const [tab, setTab] = useState("tab2");
  const project = data;
  const combo = [...project["web"],...project["FigmaDesigns"],...project["logoDesigns"]];
  console.log(combo);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-15">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <div className="flex p-8 justify-evenly text-gray-200 items-center cursor-pointer">
            {/* <p className="border-pink-600" onClick={() => setTab("tab1")}>
              All
            </p> */}
            <p className={tab==="tab2"?'activeTab':""} onClick={() => setTab("tab2")}>Web</p>
            <p onClick={() => setTab("tab3")}>Logo Designs</p>
            <p onClick={() => setTab("tab4")}>Figma Designs</p>
          </div>

          {/* {tab === "tab1" && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {combo.map((key,value) =>(
                  <Project
                    image={value.img}
                    title={value.title}
                    git={value.GitLink}
                    demo={value.DemoLink}
                  />
              ))}
            </div>
          )} */}
          {tab === "tab2" && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
              {project["web"].map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
              ))}
            </div>
          )}
          {tab === "tab3" && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project["logoDesigns"].map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
              ))}
            </div>
          )}
          {tab === "tab4" && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project["FigmaDesigns"].map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
