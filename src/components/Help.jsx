import React from 'react'

function Help() {
  return (
    <>
      <div className="mb-2 text-base">Available commands:</div>
      <ul className="list-disc pl-4 space-y-1 text-base">
        <li>
          <strong className='font-bold text-blue-500 '>about</strong> - Who am I?
        </li>
        <li>
          <strong className='font-bold  text-blue-500'>projects</strong> - View my projects
        </li>
        <li>
          <strong className='font-bold text-blue-500'>contact</strong> - Contact info
        </li>
        <li>
          <strong className='font-bold text-blue-500'>socials</strong> - Social media links
        </li>
        <li>
          <strong className='font-bold text-blue-500'>clear</strong> - Clear the screen
        </li>
        <li>
          <strong className='font-bold text-blue-500'>skills</strong> - Show my skills
        </li>
        <li>
          <strong className='font-bold text-blue-500'>help</strong> - Show available commands
        </li>
        <li>
          <strong className='font-bold text-blue-500'>resume</strong> - Open my resume
        </li>
        <li>
          <strong className='font-bold text-blue-500'>chat</strong> - Open Ravi's AI assistant
        </li>
        <li>
          <strong className='font-bold text-blue-500'>hidden</strong> - Show hidden commands
        </li>
      </ul>
      <p className='mt-2 text-sm'>Type any command and press Enter to execute the command</p>
    </>
  )
}

export default Help