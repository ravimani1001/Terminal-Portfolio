import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#222] p-4 rounded-lg mb-4 mt-2">
      <h2 className="text-xl text-yellow-500 mb-2">Skills and Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#111] p-4 rounded-lg">
          <p className="text-lg text-blue-500 mb-2">Languages</p>
          <ul className="list-disc pl-4 space-y-1 text-base">
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="bg-[#111] p-4 rounded-lg">
          <p className="text-lg text-blue-500 mb-2">Tech Stack</p>
          <ul className="list-disc pl-4 space-y-1 text-base">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Flask</li>
            <li>FastAPI</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="bg-[#111] p-4 rounded-lg">
          <p className="text-lg text-blue-500 mb-2">Database</p>
          <ul className="list-disc pl-4 space-y-1 text-base">
            <li>MongoDB</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
          </ul>
        </div>

        <div className="bg-[#111] p-4 rounded-lg">
          <p className="text-lg text-blue-500 mb-2">Tools</p>
          <ul className="list-disc pl-4 space-y-1 text-base">
            <li>Postman</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>AI tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
