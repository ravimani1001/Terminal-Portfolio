import React from 'react'

function Help() {
  return (
    <>
      <div className="mb-2 text-base">Available commands:</div>
      <ul className="list-disc pl-4 space-y-1 text-base">
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>about</p>
            <p className='flex-1 text-right'>Who am I?</p>
          </div>
          {/* <strong className='font-bold text-blue-500 '>about</strong> - Who am I? */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>projects</p>
            <p className='flex-1 text-right'>View my projects</p>
          </div>
          {/* <strong className='font-bold  text-blue-500'>projects</strong> - View my projects */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>contact</p>
            <p className='flex-1 text-right'>Contact info</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>contact</strong> - Contact info */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>socials</p>
            <p className='flex-1 text-right'>Social media links</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>socials</strong> - Social media links */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>clear</p>
            <p className='flex-1 text-right'>Clear the terminal</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>clear</strong> - Clear the screen */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>skills</p>
            <p className='flex-1 text-right'>Show my skills</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>skills</strong> - Show my skills */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>help</p>
            <p className='flex-1 text-right'>Show available commands</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>help</strong> - Show available commands */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>resume</p>
            <p className='flex-1 text-right'>Open my resume</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>resume</strong> - Open my resume */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>chat</p>
            <p className='flex-1 text-right'>Open Ravi's AI assistant</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>chat</strong> - Open Ravi's AI assistant */}
        </li>
        <li>
          <div className="bg-[#222] p-4 rounded-lg mt-2 mb-3 flex">
            <p className='font-bold text-blue-500'>hidden</p>
            <p className='flex-1 text-right'>Show hidden commands</p>
          </div>
          {/* <strong className='font-bold text-blue-500'>hidden</strong> - Show hidden commands */}
        </li>
      </ul>
      <p className='mt-2 text-sm'>Type any command and press Enter to execute the command</p>
    </>
  )
}

export default Help