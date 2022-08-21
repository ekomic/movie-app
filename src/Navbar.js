import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-bg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <a href="/" className="flex items-center ">
          <h1 className="text-3xl font-bold mr-4">EkoMovies</h1>
        </a>
        <ul className="hidden md:flex ml-auto">
          <li>
            <a className="text-blue-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
