import React from 'react'
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
        <div>
      <h2 className="text-base mb-1 mt-2">Some of my highlighted projects:</h2>
      {projects.map((project, i) => (
        <div key={i} className="bg-[#222] p-4 rounded-lg mb-4">
          <div className="flex mb-2">
            <h2 className="flex-1 text-xl text-yellow-500 ">{project.name}</h2>
            <span>
              <a
                className="text-blue-500 underline"
                href={project.github}
                target="_blank"
              >
                Code
              </a>
            </span>
            <span>{"  "}</span>
            {project.livelink != "" ? <span>
            <a
              className="text-blue-500 underline"
              href={project.livelink}
              target="_blank"
            >
              Live
            </a>
          </span> : <span>{" "}</span> }
          </div>
          <p className="mb-4 text-base">{project.desc}</p>
          <div>
            {project.tech.map((item, i) => (
              <button key={i} disabled className="px-3 py-1 mr-2 mb-2 bg-[#111] text-white text-sm">{item}</button>
            ))}
          </div>
        </div>
      ))}

      {/* <div className="bg-[#222] p-4 rounded-lg mb-4">
        <div className="flex mb-2">
          <h2 className="flex-1 text-xl text-yellow-500 ">
            PrepPilot- AI Powered Interview Preparation Platform
          </h2>
          <span>
            <a
              className="text-blue-500 underline"
              href="https://github.com/ravimani1001/PrepPilot-frontend.git"
              target="_blank"
            >
              Code
            </a>
          </span>
          <span>{"  "}</span>
          <span>
            <a
              className="text-blue-500 underline"
              href="https://prep-pilot-chi.vercel.app"
              target="_blank"
            >
              Live
            </a>
          </span>
        </div>
        <p className="mb-4 text-base">
          Developed a full-stack, AI-powered Interview Preparation Platform that
          provides personalized interview practice and detailed resume feedback,
          significantly enhancing their job readiness.
        </p>
        <div>Tech stack as buttons</div>
      </div> */}
    </div>
    </>
  )
}

export default Projects