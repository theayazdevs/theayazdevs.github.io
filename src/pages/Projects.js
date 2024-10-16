import React, { useState, useEffect } from "react";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState({});
  const [rateLimit, setRateLimit] = useState(null);
  // New state to track rate limit
  const [remainingRequests, setRemainingRequests] = useState(null);
  const [resetTime, setResetTime] = useState(null);
  // State to store languages for each project
  //GitHub username
  const GITHUB_USERNAME = "theayazdevs";
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch repositories from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        );

        // Capture rate limit headers
        const limit = response.headers.get("X-RateLimit-Limit");
        const remaining = response.headers.get("X-RateLimit-Remaining");
        const reset = response.headers.get("X-RateLimit-Reset");

        // Convert reset time from UNIX timestamp to a human-readable format
        const resetDate = new Date(reset * 1000).toLocaleTimeString();
        setRateLimit(limit);
        setRemainingRequests(remaining);
        setResetTime(resetDate);
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        console.log("GitHub Projects Response:", data);
        setProjects(data);
        setLoading(false);

        // Fetch languages for each repository
        data.forEach(async (project) => {
          const langResponse = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${project.name}/languages`
          );
          const langData = await langResponse.json();
          setLanguages((prevLangs) => ({
            ...prevLangs,
            [project.name]: Object.keys(langData),
            // Store language names as keys
          }));
        });
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
          /*<div key={project.id} className="p-4 bg-white rounded-lg shadow-md">*/
          <div
            key={project.id}
            className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md"
          >
            {" "}
            <h2 className="text-xl font-semibold">{project.name}</h2>{" "}
            <p className="mt-2">
              {project.description || "No description provided."}
            </p>{" "}
            {/* Language Tags */}{" "}
            <div className="mt-2">
              {" "}
              {languages[project.name]?.length > 0 ? (
                languages[project.name].map((language, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {" "}
                    {language}{" "}
                  </span>
                ))
              ) : (
                <span className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {" "}
                  No languages found{" "}
                </span>
              )}{" "}
            </div>
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
      {/* Display rate limit information */}{" "}
      <div className="mb-4 pt-1">
        {" "}
        <p>API Rate Limit: {rateLimit}</p>{" "}
        <p>Remaining Requests: {remainingRequests}</p>{" "}
        <p>Rate Limit Resets At: {resetTime}</p>{" "}
      </div>
    </div>
  );
};
export default Projects;
