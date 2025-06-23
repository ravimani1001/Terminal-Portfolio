import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3">
        <p className="text-xl text-blue-500 mb-2">Curious to chat or brainstorm? <span className="text-xl text-yellow-500">Don't be a stranger – say hello!</span></p>

        <div className="flex justify-evenly mt-5 flex-wrap">
        <a href="mailto:inforavimani@gmail.com">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">Email me</button>
        </a>
        <a href="https://linkedin.com/in/ravimani17" target="_blank">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">LinkedIn</button>
        </a>
        <a href="https://github.com/ravimani1001" target="_blank">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">GitHub</button>
        </a>
        <a href="tel:+919369066188">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">+91 9369066188</button>
        </a>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
