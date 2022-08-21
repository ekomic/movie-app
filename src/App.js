import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Hero from "./components/Hero";

// const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_Movie_API_KEY}`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Hero />
      </div>
    </Router>
  );
};

export default App;
