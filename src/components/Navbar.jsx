import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-around items-center px-4 h-14 text-pink-500">
            <div className="logo font-bold">
            <span className=''>&lt;PASSCODE/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="/">About</a>
                    <a className='hover:font-bold' href="/">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
