import React, { useState, useEffect } from "react";
// Function to generate a random hex color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  // The API endpoint to fetch articles from Dev.to
  const API_URL = "https://dev.to/api/articles";
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return <p>Loading blogs...</p>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      <h1 className="text-3xl font-bold mb-6">
        Latest Blogs (Retrieved from DEV.to API)
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {blogs.map((blog, index) => {
          // Generate random background color

          const bgColor = getRandomColor();
          return (
            <div key={blog.id} className="p-4 bg-white rounded-lg shadow-md">
              {" "}
              {/* Placeholder image with a random background color */}{" "}
              <img
                src={`https://via.placeholder.com/400x300/${bgColor.slice(
                  1
                )}/FFFFFF?text=${index + 1}`}
                alt={`Blog ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />{" "}
              {/* Blog title */}{" "}
              <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>{" "}
              {/* Blog description */}{" "}
              <p className="mt-2 text-gray-700">{blog.description}</p>{" "}
              {/* Link to full blog */}{" "}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                {" "}
                Read Full Blog{" "}
              </a>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
};
export default Blog;
