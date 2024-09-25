// Import React to create the BlogCard component
import React from "react";
const BlogCard = ({ blog }) => (
  // Create a card for each blog with a border, padding, and shadow
  <div className="border p-4 rounded-lg shadow-md">
    {/* Display blog title */}
    <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
    {/* Display blog description */}
    <p className="text-gray-600">{blog.description}</p>
    {/* Link to the full blog post */}
    <a href={`/blog/${blog.id}`} className="text-blue-500">
      {" "}
      Read more{" "}
    </a>
  </div>
);
export default BlogCard;
