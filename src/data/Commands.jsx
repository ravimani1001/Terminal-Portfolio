import React from "react";
import { projects } from "./projects";
import Help from "../components/help";
import About from "../components/about";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export const commandList = {
  // help: () => (
  //   <>
  //     <div className="mb-2">Available commands:</div>
  //     <ul className="list-disc pl-4 space-y-1">
  //       <li>
  //         <strong>about</strong> - Who am I?
  //       </li>
  //       <li>
  //         <strong>projects</strong> - View my projects
  //       </li>
  //       <li>
  //         <strong>contact</strong> - Contact info
  //       </li>
  //       <li>
  //         <strong>socials</strong> - Social media links
  //       </li>
  //       <li>
  //         <strong>clear</strong> - Clear the screen
  //       </li>
  //       <li>
  //         <strong>banner</strong> - Show welcome banner
  //       </li>
  //     </ul>
  //   </>
  // ),

  help : Help,

  about: About,

  projects: Projects,

  // projects: () => (
  //   <div>
  //     <h2 className="text-base mb-1 mt-2">Some of my highlighted projects:</h2>
  //     {/* <ul className="list-disc pl-4 space-y-1">
  //       <li>
  //         <strong>AI Interview Prep</strong> –{" "}
  //         <a href="https://github.com/ravi_mani_/ai-interview" className="underline text-blue-400" target="_blank" rel="noreferrer">
  //           GitHub Repo
  //         </a>
  //       </li>
  //       <li>
  //         <strong>Crypto Stats API</strong> –{" "}
  //         <a href="https://github.com/ravi_mani_/crypto-api" className="underline text-blue-400" target="_blank" rel="noreferrer">
  //           GitHub Repo
  //         </a>
  //       </li>
  //       <li>
  //         <strong>Terminal Portfolio</strong> – You’re looking at it right now! 😄
  //       </li>
  //     </ul> */}

  //     {projects.map((project, i) => (
  //       <div key={i} className="bg-[#222] p-4 rounded-lg mb-4">
  //         <div className="flex mb-2">
  //           <h2 className="flex-1 text-xl text-yellow-500 ">{project.name}</h2>
  //           <span>
  //             <a
  //               className="text-blue-500 underline"
  //               href={project.github}
  //               target="_blank"
  //             >
  //               Code
  //             </a>
  //           </span>
  //           <span>{"  "}</span>
  //           {project.livelink != "" ? <span>
  //           <a
  //             className="text-blue-500 underline"
  //             href="https://prep-pilot-chi.vercel.app"
  //             target="_blank"
  //           >
  //             Live
  //           </a>
  //         </span> : <span>{" "}</span> }
  //         </div>
  //         <p className="mb-4 text-base">{project.desc}</p>
  //         <div>
  //           {project.tech.map((item, i) => (
  //             <button key={i} disabled className="px-3 py-1 mr-2 bg-[#111] text-white text-sm">{item}</button>
  //           ))}
  //         </div>
  //       </div>
  //     ))}

  //     {/* <div className="bg-[#222] p-4 rounded-lg mb-4">
  //       <div className="flex mb-2">
  //         <h2 className="flex-1 text-xl text-yellow-500 ">
  //           PrepPilot- AI Powered Interview Preparation Platform
  //         </h2>
  //         <span>
  //           <a
  //             className="text-blue-500 underline"
  //             href="https://github.com/ravimani1001/PrepPilot-frontend.git"
  //             target="_blank"
  //           >
  //             Code
  //           </a>
  //         </span>
  //         <span>{"  "}</span>
  //         <span>
  //           <a
  //             className="text-blue-500 underline"
  //             href="https://prep-pilot-chi.vercel.app"
  //             target="_blank"
  //           >
  //             Live
  //           </a>
  //         </span>
  //       </div>
  //       <p className="mb-4 text-base">
  //         Developed a full-stack, AI-powered Interview Preparation Platform that
  //         provides personalized interview practice and detailed resume feedback,
  //         significantly enhancing their job readiness.
  //       </p>
  //       <div>Tech stack as buttons</div>
  //     </div> */}
  //   </div>
  // ),

  contact: Contact,

  socials: Socials,

  skills : Skills,

  whoareyou: () => (
    <div>
      I am <strong>Ravi Mani</strong>, a full-stack dev with backend superpowers!
    </div>
  ),

  sudo: () => (
    <div>
      <strong>Permission denied:</strong> You are not the boss!
    </div>
  ),

  rocknroll: () => {
    window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc", "_blank");
    return <div>BELIEVER!</div>;
  },

  resume: () => {
    window.open("https://drive.google.com/file/d/1mOKJpzwnIXO9sYn_bvg0ovKKNEua_9Tb/view?usp=drive_link", "_blank");
    return <div>Resume opened</div>;
  },

  hidden: () => {
    
    return <div>
      <p>Hidden commands!</p>
      <ul className="list-disc px-4">
        <li>whoareyou</li>
        <li>sudo</li>
        <li>rocknroll</li>
      </ul>
    </div>;
  },

};
