import React, { useState } from "react";
const Slideshow = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;
  // Get images from the current project
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="project-container">
      {" "}
      <div className="relative w-full max-w-md mx-auto slideshow-container">
        {" "}
        <div className="overflow-hidden">
          {" "}
          <img
            src={images[currentIndex]}
            alt={`Project ${project.name} - Image ${currentIndex + 1}`}
            className="w-full h-auto slideshow-image"
          />{" "}
        </div>{" "}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
          {" "}
          <button
            onClick={prevImage}
            className="bg-gray-700 text-white p-2 rounded-full"
          >
            ❮
          </button>{" "}
        </div>{" "}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
          {" "}
          <button
            onClick={nextImage}
            className="bg-gray-700 text-white p-2 rounded-full"
          >
            ❯
          </button>{" "}
        </div>{" "}
        <div className="flex justify-center mt-2">
          {" "}
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}{" "}
        </div>{" "}
      </div>
    </div>
  );
};
export default Slideshow;
