// Import necessary modules from React and React Router
import React from "react";
import { Routes, Route } from "react-router-dom";
// Import different pages that the app will navigate to
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
const AppRouter = () => (
  // Define all routes within the application
  <Routes>
    {/* Home page route */}
    <Route path="/" element={<Home />} />
    {/* Projects page route */}
    <Route path="/projects" element={<Projects />} />
    {/* Blog page route */}
    <Route path="/blog" element={<Blog />} />
    {/* About me page route */}
    <Route path="/about" element={<About />} />
    {/* Contact page route */}
    <Route path="/contact" element={<Contact />} />
    {/* Resume page route */}
    <Route path="/resume" element={<Resume />} />
  </Routes>
);
export default AppRouter;
