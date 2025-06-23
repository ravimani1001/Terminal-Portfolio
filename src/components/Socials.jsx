import React from 'react'

const Socials = () => {
  return (
    <>
        <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3">
        <p className="text-xl text-yellow-500 mb-2">Beyond this page, find me here:</p>

        <div className="flex justify-evenly mt-5">
        <a href="https://www.upwork.com/freelancers/~0141d0989fe0897c4d" target='_blank'>
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">Upwork</button>
        </a>
        <a href="https://linkedin.com/in/ravimani17" target="_blank">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">LinkedIn</button>
        </a>
        <a href="https://github.com/ravimani1001" target="_blank">
            <button className="px-4 py-2 mr-2 bg-[#111] text-white text-sm">GitHub</button>
        </a>
        </div>
        
      </div>
    </>
  )
}

export default Socials