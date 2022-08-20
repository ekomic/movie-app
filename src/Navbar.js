import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 flex w-full h-full items-center">
      <div className="container">
        <h1 className="text-4xl text-purple-800 text-center">EkoMovies</h1>
      </div>
      <ul className="flex ml-auto mx-3">
        <li>
          <a className="text-blue-500" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
