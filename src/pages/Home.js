import React from "react";
import { ReactTyped } from "react-typed";
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
    <div className="skill-card w-64 h-80 bg-white shadow-lg m-4">
      {" "}
      <div className="card-inner">
        {" "}
        {/* Front of the Card */}{" "}
        <div className="card-front bg-gray-200 p-6 flex flex-col justify-center items-center">
          {" "}
          <img src={skill.image} alt={skill.name} className="w-24 h-24" />{" "}
          <h3 className="text-xl font-bold mt-4">{skill.name}</h3>{" "}
        </div>{" "}
        {/* Back of the Card */}{" "}
        <div className="card-back p-6 flex flex-col justify-center items-center">
          {" "}
          <h3 className="text-lg font-bold mb-4">{skill.name}</h3>{" "}
          <p className="text-sm text-center">{skill.description}</p>{" "}
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
const Home = () => {
  return (
    <div className="container mx-auto py-20 flex flex-col items-center justify-center min-h-screen">
      {" "}
      <div className="text-4xl md:text-6xl font-bold mb-4 text-center">
        <ReactTyped
          strings={["Welcome to John Kennedy's Portfolio"]}
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
          startDelay={3000}
          // Delay before typing starts
          onComplete={() => console.log("Typing animation completed!")}
        />{" "}
      </p>{" "}
      <SkillsSection />{" "}
    </div>
  );
};
export default Home;
