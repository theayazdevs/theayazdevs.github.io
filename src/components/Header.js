import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../images/try5.png";
//image path
import {
  FaHome,
  FaProjectDiagram,
  FaBlog,
  FaUser,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-800 text-white p-4">
      {" "}
      <nav className="flex justify-between items-center">
        {/* Website name */}{" "}
        <div className="relative group">
          {" "}
          <span className="relative">
            <h1 className="text-2xl font-bold">Ayaz Ahmad</h1>
          </span>
          {/* Hidden Image */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 hidden group-hover:block">
            {" "}
            <img
              src={profileImage}
              // Image file path
              alt="Ayaz Ahmad"
              className="rounded-lg shadow-lg"
            />{" "}
          </div>{" "}
        </div>
        {/* Hamburger menu icon for mobile */}{" "}
        <div className="md:hidden">
          {" "}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {" "}
            {/* If the menu is open, show "X" icon, else show hamburger */}{" "}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />{" "}
              </svg>
            )}{" "}
          </button>{" "}
        </div>{" "}
        {/* Desktop navigation */}{" "}
        <ul className="hidden md:flex space-x-4">
          {" "}
          <li>
            {" "}
            <Link to="/" className="flex flex-col items-center">
              <FaHome /> <span>Home</span>
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/projects" className="flex flex-col items-center">
              <FaProjectDiagram /> <span>Projects</span>
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/blog" className="flex flex-col items-center">
              <FaBlog /> <span>Blog</span>
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/about" className="flex flex-col items-center">
              <FaUser /> <span>About</span>
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/contact" className="flex flex-col items-center">
              <FaEnvelope /> <span>Contact</span>
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/resume" className="flex flex-col items-center">
              <FaFileAlt /> <span>Resume</span>
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
        {/* Mobile navigation menu */}{" "}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 z-10 md:hidden">
            {" "}
            <li>
              {" "}
              <Link to="/" onClick={toggleMenu}>
                {" "}
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="/projects" onClick={toggleMenu}>
                {" "}
                Projects{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="/blog" onClick={toggleMenu}>
                {" "}
                Blog{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="/about" onClick={toggleMenu}>
                {" "}
                About{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="/contact" onClick={toggleMenu}>
                {" "}
                Contact{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="/resume" onClick={toggleMenu}>
                {" "}
                Resume{" "}
              </Link>{" "}
            </li>{" "}
          </ul>
        )}{" "}
      </nav>{" "}
    </header>
  );
};
export default Header;
