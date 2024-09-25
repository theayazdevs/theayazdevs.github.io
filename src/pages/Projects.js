import React, { useState, useEffect } from "react";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  //GitHub username
  const GITHUB_USERNAME = "theayazdevs";
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch repositories from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        );
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      <h1 className="text-3xl font-bold mb-6">
        Projects (
        <a
          href="https://github.com/theayazdevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex items-center text-blue-500">
            {" "}
            <CiLink className="text-blue-500 mr-1" />
            GitHub{" "}
          </span>
        </a>
        )
      </h1>{" "}
      <h3>Retrieved using GitHub's Api linked to my GitHub acacount</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {" "}
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-white rounded-lg shadow-md">
            {" "}
            <h2 className="text-xl font-semibold">{project.name}</h2>{" "}
            <p className="mt-2 text-gray-800">
              {project.description || "No description provided."}
            </p>{" "}
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              {" "}
              View Project{" "}
            </a>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default Projects;
