import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex justify-around items-center px-4 h-14 text-pink-500 w-full absolute bottom-0">
        <div className="logo font-bold">
          <span className=''>&lt;PASSCODE/&gt;</span>
        </div>
        <div>
          Copyright restricted &copy; Created by Reshob Yadav
        </div>
        <div className='size-7 bg-black'>
          <img src="/passcode.svg" alt="logo" />
        </div>
      </div>
    </>
  )
}

export default Footer
