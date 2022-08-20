import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

// const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_Movie_API_KEY}`;
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=789caa97";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <h1 className="bg-red-800 text-4xl">World of Movies</h1>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
