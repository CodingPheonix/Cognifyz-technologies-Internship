import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>
            <nav className="flex justify-between items-center p-3 shadow-md shadow-blue-300 bg-white">
                <h3 className="font-bold text-3xl">LOGO</h3>
                <ul className="md:flex justify-around items-center gap-10 text-xl hidden">
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#hero_section">Home</a></li>
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#Technologies">Technologies</a></li>
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#contact">Contact us</a></li>
                </ul>
                <div className="md:flex justify-around items-center gap-5 font-semibold text-xl text-white hidden">
                    <button className="py-2 px-4 rounded-full bg-blue-600">Sign in</button>
                    <button className="py-2 px-4 border rounded-full bg-blue-600">Premium</button>
                </div>
                {/* Hamburger Menu  */}
                <div className='md:hidden block'>
                    {isNavOpen === false ? (
                        <GiHamburgerMenu onClick={() => { setIsNavOpen(!isNavOpen) }} />
                    ) : (
                        <RxCross1 onClick={() => { setIsNavOpen(!isNavOpen) }} />
                    )}
                </div>
            </nav>
            <nav id="md_nav" className={`z-50 bg-white shadow-lg border-2 w-[40vw] p-5 absolute flex-col gap-5 top-16 right-0 ${isNavOpen ? `flex` : 'hidden'}`}>
                <ul className="flex flex-col justify-around items-center gap-4 text-xl">
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#hero_section">Home</a></li>
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#Technologies">Technologies</a></li>
                    <li className="hover:scale-110 hover:text-blue-500 hover:underline transition-all duration-150 ease-in-out"><a
                        href="#contact">Contact us</a></li>
                </ul>
                <div className="flex flex-col justify-around items-center gap-5 font-semibold text-xl text-white">
                    <button className="py-2 px-4 w-full rounded-full bg-blue-600">Sign in</button>
                    <button className="py-2 px-4 w-full border rounded-full bg-blue-600">Premium</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
