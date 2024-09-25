// Import React to create the ProjectCard component
import React from "react";
const ProjectCard = ({ project }) => (
  // Create a card for each project with a border, padding, and shadow
  <div className="border p-4 rounded-lg shadow-md">
    {/* Display project image */}
    <img src={project.image} alt={project.title} className="rounded" />
    {/* Display project title */}
    <h3 className="text-lg font-bold mt-2">{project.title}</h3>
    {/* Display project description */}
    <p className="text-gray-600">{project.description}</p>
    {/* GitHub link to the project */}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500"
    >
      {" "}
      View on GitHub{" "}
    </a>
  </div>
);
export default ProjectCard;
