import React, { useState } from "react";
import Project from "./Project";
import Spotify from "../assets/Projects_Images/Spotify.png";
import Amazon from "../assets/Projects_Images/Amazon.png";
import Google from "../assets/Projects_Images/Google.png";
import ReactSkeletons from "../assets/Projects_Images/ReactSkeletons.png";
import MusicPlayer from "../assets/Projects_Images/MusicPlayer.png";
import AdviceGenerator from "../assets/Projects_Images/AdviceGenerator.png";
import AdidasLogo from "../assets/Projects_Images/AdidasLogo.png";
import Netflixlogo from "../assets/Projects_Images/NetflixLogo.png";
import GoogleLogo from "../assets/Projects_Images/GoogleLogo.png";
import Instagramlogo from "../assets/Projects_Images/InstagramLogo.png";
import HeartLogo from "../assets/Projects_Images/HeartLogo.png";
import LinkedInLogo from "../assets/Projects_Images/LinkedInLogo.png";
import userProfile from "../assets/Projects_Images/userProfile.png";
import foodOrder from "../assets/Projects_Images/foodOrder.png";
import poster from "../assets/Projects_Images/Poster.png";
import processing from "../assets/Projects_Images/processing.png";

const Projects = () => {
  const [tab, setTab] = useState("tab1");
  //   console.log(tab);
  const web = [
    {
      img: Spotify,
      title: "Spotify Clone",
      GitLink: "https://github.com/indhu-github/spotify-clone",
      DemoLink: "https://spotify-clone-a62e8.web.app/",
    },
    {
      img: Google,
      title: "Google Clone",
      GitLink: "https://github.com/indhu-github/google-clone",
      DemoLink: "https://clone-f8121.web.app/",
    },
    {
      img: Amazon,
      title: "Amazon Clone",
      GitLink: "https://github.com/indhu-github/Amazon-clone",
      DemoLink: "https://clone-1e098.web.app/",
    },
    {
      img: ReactSkeletons,
      title: "React Skeletons Screen",
      GitLink: "https://github.com/indhu-github/React-Skeletons-Screen",
      DemoLink: "https://indhu-github.github.io/React-Skeletons-Screen/",
    },
    {
      img: MusicPlayer,
      title: "Music Player",
      GitLink: "https://github.com/indhu-github/Music-Player",
      DemoLink: "https://indhu-github.github.io/Music-Player/",
    },
    {
      img: AdviceGenerator,
      title: "Advice Generator",
      GitLink: "https://github.com/indhu-github/Advice-generator",
      DemoLink: "https://indhu-github.github.io/Advice-generator/",
    },
  ];
  const logoDesigns = [
    {
      img: Instagramlogo,
      title: "Instagram Logo",
      GitLink: "https://github.com/indhu-github/Instagram-Logo",
      DemoLink: "https://indhu-github.github.io/Instagram-Logo/",
    },
    {
      img: GoogleLogo,
      title: "Google Logo",
      GitLink: "https://github.com/indhu-github/Google-Logo",
      DemoLink: "https://indhu-github.github.io/Google-Logo/",
    },
    {
      img: HeartLogo,
      title: "Heart Shape",
      GitLink: "https://github.com/indhu-github/heart-shape",
      DemoLink: "https://indhu-github.github.io/heart-shape/",
    },
    {
      img: LinkedInLogo,
      title: "LinkedIn Logo",
      GitLink: "https://github.com/indhu-github/Linkedin-Logo",
      DemoLink: "https://indhu-github.github.io/Linkedin-Logo/",
    },
    {
      img: AdidasLogo,
      title: "Adidas Logo",
      GitLink: "https://github.com/indhu-github/Adidas-Logo",
      DemoLink: "https://indhu-github.github.io/Adidas-Logo/",
    },
    {
      img: Netflixlogo,
      title: "Netflix Logo",
      GitLink: "https://github.com/indhu-github/Netflix-Logo",
      DemoLink: "https://indhu-github.github.io/Netflix-Logo/",
    },
  ];
  const FigmaDesigns = [
    {
      img: userProfile,
      title: "User Profile",
      DemoLink:
        "https://www.figma.com/file/zB6Krz0Ub08xdmwKUtl0nl/User-Profile?node-id=0%3A1",
    },
    {
      img: processing,
      title: "Processing",
      DemoLink:
        "https://www.figma.com/file/9mY6txbKT4ooUrG7VuHvs7/Multi-step-Progress-Bar?node-id=0%3A1",
    },
    {
      img: foodOrder,
      title: "Food Order",
      DemoLink:
        "https://www.figma.com/file/CR8SJqHssZXkECZdOus6QL/Food-Ordering-App?node-id=0%3A1",
    },
    {
      img: poster,
      title: "Poster",
      DemoLink:
        "https://www.figma.com/file/Ba6GO9xQexmyO4vhvjiOS3/Landing-Page?node-id=0%3A1",
    },
  ];

  return (
    <div name="work" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <div className="flex p-8 justify-between text-gray-200 items-center cursor-pointer">
            <p
              className= "border-pink-600" 
              onClick={() => setTab("tab1")}
            >
              All
            </p>
            <p onClick={() => setTab("tab2")}>
              Web
            </p>
            <p onClick={() => setTab("tab3")}>
              Logo Designs
            </p>
            <p onClick={() => setTab("tab4")}>
              Figma Designs
            </p>
          </div>
          {/* {tab === "tab1" &&
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...web,...logoDesigns,...FigmaDesigns].map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
            ))}
             </div>
            } */}
          {tab === "tab2" &&
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {web.map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
            ))}
             </div>
            }
            {tab === "tab3" &&
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {logoDesigns.map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
            ))}
             </div>
            }
            {tab === "tab4" &&
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FigmaDesigns.map((proj, index) => (
                <Project
                  key={index}
                  image={proj.img}
                  title={proj.title}
                  git={proj.GitLink}
                  demo={proj.DemoLink}
                />
            ))}
             </div>
            }
          </div>
      </div>
    </div>
  );
};

export default Projects;
