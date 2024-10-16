import React from "react";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaJava,
  FaGit,
  FaPhp,
  FaJira,
} from "react-icons/fa";
const Resume = () => {
  const downloadResume = () => {
    //resume.pdf placed in public folder for now
    window.open("/assets/pdfs/resume.pdf");
  };
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 6000);
    // Timer for collapse animation
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 ">
      {" "}
      {/*<h1 className="text-3xl font-bold mb-6 text-center">Resume</h1>{" "}*/}
      <div className="central-text ">
        {" "}
        <h2>Resume</h2>{" "}
        {!isCollapsed && (
          <div className="orbit">
            {" "}
            <span className="icon html">
              <FaHtml5 />
            </span>{" "}
            <span className="icon css">
              <FaCss3Alt />
            </span>{" "}
            <span className="icon js">
              <FaJs />
            </span>{" "}
            <span className="icon react">
              <FaReact />
            </span>{" "}
            <span className="icon java">
              <FaJava />
            </span>{" "}
            <span className="icon git">
              <FaGit />
            </span>{" "}
            <span className="icon php">
              <FaPhp />
            </span>{" "}
            <span className="icon jira">
              <FaJira />
            </span>{" "}
          </div>
        )}{" "}
      </div>
      <p className="text-lg mb-4 text-center">
        {" "}
        Here’s a summary of my professional experience and skills. You can also
        download my full resume below.{" "}
      </p>{" "}
      <ul className="list-disc pl-5 mb-6 ">
        {" "}
        <li>
          <b>
            Software Engineer Trainee at Hexcode Technologies LLC (Jan 2024 -
            May 2024)
          </b>
          <ul className="list-disc pl-5 mb-6 ">
            <li>
              Assist senior developers in building user interfaces and
              implementing front-end features using ReactJS.
            </li>
            <li>
              Contribute to the development and maintenance of reusable UI
              components within the ReactJS ecosystem.
            </li>
            <li>
              Write clean, maintainable, and well-documented code following
              Hexkode's coding standards.
            </li>
            <li>
              Participate in code reviews and actively learn from feedback
              provided by senior developers.
            </li>
            <li>
              Participate in scrum ceremonies such as Daily Scrum, Sprint
              Planning, Backlog Refinement, Retrospective
            </li>
            <li>
              Stay up-to-date on emerging front-end trends and ReactJS best
              practices.
            </li>
          </ul>
        </li>{" "}
        <li>
          <b>HackCamp2022 at University of Salford (Jan 2022)</b>
          <ul className="list-disc pl-5 mb-6 ">
            <li>
              Facilitated and participated in all Scrum ceremonies, including
              sprint planning, daily stand-ups, sprint reviews, and
              retrospectives.
            </li>
            <li>
              Actively removed impediments to ensure smooth project progression
              and supported the Product Owner in managing the project backlog.
            </li>
            <li>
              Coached team members on Scrum practices, fostering collaboration
              and maintaining focus on project goals.
            </li>
          </ul>
        </li>{" "}
        <li>
          <b>
            Bachelors of Software Engineering (BSc Hons) from University of
            Salford
          </b>
          <ul className="list-disc pl-5 mb-6 ">
            <li>Achieved 1st class.</li>
          </ul>
        </li>{" "}
        <li>
          Specialized in React, JavaScript, HTML, CSS, Tailwind CSS, PHP, and
          Java
        </li>{" "}
        <li>Proficient in API integrations, frontend architecture</li>{" "}
      </ul>{" "}
      <div className="text-center">
        <button
          onClick={downloadResume}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {" "}
          Download Resume{" "}
        </button>{" "}
      </div>
    </div>
  );
};
export default Resume;
