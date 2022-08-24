import React, {useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleToggle = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-5 flex justify-between items-center w-full h-full">
        <a href="/" className="flex items-center">
          <h1 className="text-[2rem] font-bold font-raleway mr-4">
            Eko<span className="text-yellow-700">Movies</span>
          </h1>
        </a>
        <ul className="hidden md:flex ml-auto">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/movies" className="nav-link">
              Movies
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      <div className="md:hidden" onClick={handleToggle}>
      {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5"/>}
      </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute mobile-nav bg-zinc-200 px-8 w-full md:hidden"}>
      <li className="border-b-2 border-zinc-300 w-full">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <a href="/movies" className="nav-link">
              Movies
            </a>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
