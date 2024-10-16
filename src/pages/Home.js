//import React from "react";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Slideshow from "../components/Slideshow";
import { FaComputer } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
const skills = [
  {
    name: "HTML",
    description:
      "Expert in using HTML to structure web pages and applications, ensuring clean, semantic, and accessible markup.",
    image: "/assets/images/html5.png",
  },
  {
    name: "CSS",
    description:
      "Skilled in styling with CSS, including responsive design, Flexbox, Grid, and CSS frameworks like Tailwind CSS.",
    image: "/assets/images/css3.png",
  },
  {
    name: "JavaScript",
    description:
      "Strong command of JavaScript, including ES6+ features, asynchronous programming, DOM manipulation, and APIs.",
    image: "/assets/images/javascript.png",
  },
  {
    name: "React",
    description:
      "Extensive experience building modern web applications using React and Hooks.",
    image: "/assets/images/reactjs.png",
  },
  {
    name: "PHP",
    description:
      "Proficient in PHP for server-side scripting, building dynamic websites, and integrating with databases like MySQL.",
    image: "/assets/images/php.png",
  },
  {
    name: "Tailwind CSS",
    description:
      "Used Tailwind CSS to build custom designs: utility classes to control the layout, color, spacing, typography, and more as well as to build responsive designs with Tailwind's responsive utilities.",
    image: "/assets/images/tailwindcss.png",
  },
  {
    name: "Git",
    description:
      "Experienced in version control using Git, including branching, merging, and collaboration workflows.",
    image: "/assets/images/git.png",
  },
  {
    name: "Java",
    description:
      "Solid understanding of object-oriented programming in Java, including building robust backend systems and Android apps.",
    image: "/assets/images/java.png",
  },
  {
    name: "Jira",
    description:
      "Experienced in using Jira for project tracking, issue management, and agile project methodologies.",
    image: "/assets/images/jira.png",
  },
];
const SkillCard = ({ skill }) => {
  return (
    /*<div className="skill-card w-64 h-80 bg-white shadow-lg m-4">*/
    <div className="skill-card w-64 h-80  bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg m-4">
      {" "}
      <div className="card-inner">
        {" "}
        {/* Front of the Card */}{" "}
        {/*<div className="card-front bg-gray-200 p-6 flex flex-col justify-center items-center">*/}
        <div className="card-front  bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 flex flex-col justify-center items-center">
          {" "}
          <img src={skill.image} alt={skill.name} className="w-24 h-24" />{" "}
          <h3 className="text-xl font-bold mt-4">{skill.name}</h3>{" "}
        </div>{" "}
        {/* Back of the Card */}{" "}
        <div className="card-back p-6 flex flex-col justify-center items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          {" "}
          <h3 className="text-lg font-bold mb-4">{skill.name}</h3>{" "}
          <p className="text-sm text-center text-gray-800 dark:text-gray-300">
            {skill.description}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
const SkillsSection = () => {
  return (
    <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {" "}
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}{" "}
    </div>
  );
};
const MyWorkSection = () => {
  // Define your projects with an array of images
  const projects = [
    {
      name: "Food Ordering App",
      images: [
        "/assets/images/fyp1.png",
        "/assets/images/fyp2.png",
        "/assets/images/fyp3.png",
      ],
      description:
        "Flutter Project: The food ordering app offers ability to manage a restaurant menu to take orders from customer. Also, customers can use this app to make orders. An advanced feature, that is the use of speech recogntion technology to recognize user commands and take action has been implemented.",
      tags: ["Flutter", "Dart", "Firebase", "Git"],
    },
    {
      name: "HackCamp (Group Project)",
      images: [
        "/assets/images/hackcamp1.png",
        "/assets/images/hackcamp2.png",
        "/assets/images/hackcamp3.png",
        "/assets/images/hackcamp4.png",
        "/assets/images/hackcamp5.png",
        "/assets/images/hackcamp6.png",
        "/assets/images/hackcamp7.png",
        "/assets/images/hackcamp8.png",
        "/assets/images/hackcamp9.png",
        "/assets/images/hackcamp10.png",
        "/assets/images/hackcamp11.png",
        "/assets/images/hackcamp12.png",
        "/assets/images/hackcamp13.png",
      ],
      description:
        "Worked in a team for a client to develop a website that allowed the admin to make experiments such as surveys or prototypes. The users are able to see and respond to the experiments. Website made with PHP, Ajax, HTML, CSS, Bootstrap, JavaScript and MySQL.",
      tags: ["PHP", "JavaScript", "Scrum", "Bootstrap"],
    },
    {
      name: "Healthy Human (Game Project)",
      images: [
        "/assets/images/hh1.png",
        "/assets/images/hh2.png",
        "/assets/images/hh3.png",
        "/assets/images/hh4.png",
        "/assets/images/hh5.png",
      ],
      description:
        "The main theme of the healthy human game is to teach primary school students about healthy and unhealthy food. Fruits are represented as healthy food while burgers and doughnuts convey unhealthy food.",
      tags: ["Java", "JavaFX", "Design Patterns"],
    },
    {
      name: "Elemental-Crush (Device sensor based educational game)",
      images: [
        "/assets/images/elemental2.png",
        "/assets/images/elemental1.png",
        "/assets/images/elemental3.png",
        "/assets/images/elemental4.png",
      ],
      description:
        "Game made with Kotlin. It is a quiz game which makes use of the android device's sensors for the character movement.",
      tags: ["Kotlin", "Android", "Device Sensors"],
    },
    {
      name: "Microbash (Educational game)",
      images: [
        "/assets/images/micro1.png",
        "/assets/images/micro2.png",
        "/assets/images/micro3.png",
      ],
      description: "Educational game for kids developed in Swift.",
      tags: ["Swift", "iOS"],
    },
  ];
  return (
    <div>
      {" "}
      <section id="my-work" className="py-12 bg-gray-100 dark:bg-gray-900">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {" "}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.name}
                </h3>{" "}
                <Slideshow project={project} />{" "}
                {/* Render the Slideshow component */}{" "}
                <div className="project-description">
                  {" "}
                  {/* Project description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>{" "}
                  <div className="flex space-x-2">
                    {" "}
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="badge">
                        {tag}
                      </span>
                    ))}{" "}
                  </div>
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};
const Home = () => {
  const [showWork, setShowWork] = useState(true);
  const [fade, setFade] = useState(true);
  const [slide, setSlide] = useState(false); // To handle the sliding effect
  // State to handle fade effect
  const toggleSection = () => {
    // Start sliding animation
    setSlide(true);
    setFade(false);
    // Trigger fade out // Wait for the fade-out animation to finish, then toggle the section
    setTimeout(() => {
      setShowWork(!showWork);
      setFade(true);
      // Trigger fade-in after toggling
    }, 500);
    // Duration should match the fade-out transition time
    setTimeout(() => {
      setFade(true);
      // Fade in after toggle
      setSlide(false);
      // Reset the sliding effect after the animation completes
    }, 1000);
  };
  return (
    <div className="container mx-auto py-20 flex flex-col items-center justify-center min-h-screen">
      {" "}
      <div className="text-4xl md:text-6xl font-bold mb-4 text-center">
        <ReactTyped
          strings={["Hey, I'm Ayaz Ahmad, Welcome to my Portfolio!"]}
          typeSpeed={50}
          // Speed of typing
          backSpeed={50} // Speed of backspacing
          showCursor={false}
          // Hide the blinking cursor after typing
          startDelay={500}
          // Delay before typing starts
          onComplete={() => console.log("Typing animation completed!")}
        />
      </div>
      {/* Button that slides from left to right */}{" "}
      <div
        className={`relative mt-8 flex justify-center transition-transform duration-700 ease-in-out transform ${
          slide ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {" "}
        <button
          onClick={toggleSection}
          className="flex items-center p-4 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-500 ease-in-out"
          aria-label="Toggle Section"
          style={{ width: "auto", padding: "12px 24px" }}
        >
          {" "}
          {/* Arrow Icon */}{" "}
          <span
            className={`text-2xl mr-3 transition-transform duration-500 ${
              showWork ? "transform rotate-0" : "transform rotate-180"
            }`}
          >
            {" "}
            {showWork ? "⭯" : "⭯"}{" "}
          </span>{" "}
          {/* Text (changes as button slides) */}{" "}
          <span className="text-lg">
            {showWork ? "View My Skills" : "View My Work"}
          </span>{" "}
        </button>{" "}
      </div>
      {/*
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        {" "}
        My Work{" "}
      </h2>{" "}
      <MyWorkSection />
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        Proficiencies
      </h2>
      <SkillsSection />{" "}
      */}
      {/* Section Container */}
      <div
        className={`section-container transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {" "}
        {showWork ? (
          /* My Work SECTION */
          <div>
            <h2 className="mt-5 text-3xl font-bold mb-8 text-gray-800 dark:text-white flex flex-col items-center">
              <FaComputer /> <span>My Work</span>
            </h2>
            <p className="text-lg mb-12 text-center">
              {" "}
              <ReactTyped
                strings={[
                  "I have worked with different technologies throughout the years, Please have a look around my projects below!",
                ]}
                typeSpeed={25}
                // Speed of typing
                backSpeed={50} // Speed of backspacing
                showCursor={false}
                // Hide the blinking cursor after typing
                startDelay={1000}
                // Delay before typing starts
                onComplete={() => console.log("Typing animation completed!")}
              />{" "}
            </p>{" "}
            <MyWorkSection />
          </div>
        ) : (
          /* SKILLS SECTION */
          <div>
            <h2 className="mt-5 text-3xl font-bold mb-8 text-gray-800 dark:text-white flex flex-col items-center">
              <GiSkills /> <span>Proficiencies</span>
            </h2>
            <p className="text-lg mb-12 text-center">
              {" "}
              <ReactTyped
                strings={[
                  "Explore my skills below! (To flip the skill card: Hover over card if on PC or Click on card if on Mobile)",
                ]}
                typeSpeed={25}
                // Speed of typing
                backSpeed={50} // Speed of backspacing
                showCursor={false}
                // Hide the blinking cursor after typing
                startDelay={1000}
                // Delay before typing starts
                onComplete={() => console.log("Typing animation completed!")}
              />{" "}
            </p>{" "}
            <SkillsSection />{" "}
          </div>
        )}{" "}
      </div>{" "}
      {/* Toggle Button */}{" "}
      <button
        onClick={toggleSection}
        className={`mt-8 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300 ${
          showWork ? "transform rotate-0" : "transform rotate-180"
        }`}
        aria-label="Toggle Section"
      >
        {" "}
        {/*{showWork ? "⭯" : "⮌"} */}
        <span> {showWork ? "⭯" : "⭯"} </span>{" "}
      </button>
    </div>
  );
};
export default Home;
