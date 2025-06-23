import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3">
        <p>
          <span className=" text-xl text-yellow-500">Hey! I'm Ravi Mani</span>
        </p>
        <p className="text-base">
          Backend Developer passionate about full-stack, transforming complex logic into clean, scalable APIs. I thrive on debugging and building with Node.js, Express, MongoDB, PostgreSQL, Redis, and the MERN Stack, consistently pushing to learn and deliver.
        </p>
      </div>

      <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3">
        <p>
          <span className=" text-xl text-yellow-500">Education</span>
        </p>
        <div className="flex mb-2">
            <p className="flex-1 text-base">Bachelor of Technology - Computer Science and Engineering</p>
            <p className="text-sm">Nov 2022 - Present</p>
        </div>
        <p className="text-base">
          Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh
        </p>
        <p className="text-base">CGPA : 8.02</p>
      </div>

      <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3">
        <p className="text-sm">Try 'projects', 'contact', 'socials' or 'skills' command to know more.</p>
      </div>
    </>
  );
};

export default About;
