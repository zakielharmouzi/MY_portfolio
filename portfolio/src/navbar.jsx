import React from "react";

const Navbar=()=>{
    return(
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-greey p-6">
    <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">Zakaria</span>
    </div>
    <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
        <li className="text-black hover:text-gray-800">
            <a href="#home">Home</a>
        </li>
        <li className="text-black hover:text-gray-800">
            <a href="#about">About</a>
        </li>
        <li className="text-black hover:text-gray-800">
            <a href="#projects">Projects</a>

        </li>
        <li className="text-black hover:text-gray-800">
            <a href="#contact">Contact</a>
        </li>
    </ul>
    </nav>
        </div>
    )
}
export default Navbar;