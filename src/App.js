import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/movies" exact element={<Movies />} />
        </Routes>
        <Hero />
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
