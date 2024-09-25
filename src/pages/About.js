import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { CiLink } from "react-icons/ci";
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">
        About Ayaz Ahmad (
        <a
          href="https://www.linkedin.com/in/ayaz-ahmad-88b15122a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex items-center text-blue-500">
            {" "}
            <CiLink className="text-blue-500 mr-1" /> LinkedIn{" "}
          </span>
        </a>
        )
      </h1>
      <div className="text-8xl font-large text-gray-700 py-60">
        <Typewriter
          words={[
            "I'm a passionate Software Developer.",
            "I specialize in HTML, CSS, JavaScript, React, Java and PHP.",
            "I love building interactive web apps and other software.",
            "Let's work together on exciting projects.",
          ]}
          loop={0}
          // Set to '0' for infinite loop cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />{" "}
      </div>{" "}
    </div>
  );
};
export default About;
