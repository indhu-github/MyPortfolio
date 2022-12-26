import React from "react";

const Project = ({ key, image, title, git, demo }) => {
  return (
    <div
      key={key}
      style={{backgroundImage: `url(${image})`}}
      className="shadow-lg shadow-[#040c16] group container rounded-2xl
              flex justify-center text-center items-center mx-auto content-div"
    >
      {/* Hover effect for images */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font bold text-white tracking-wider ">
          {title}
        </span>
        <div className="pt-8 text-center ">
          {git && (
            <a href={git} target="_blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          )}
          <a href={demo} target="_blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
