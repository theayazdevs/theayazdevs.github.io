// Import axios for making API requests
import axios from "axios";
// Function to fetch project data from API (API endpoint)
export const fetchProjects = async () => {
  // Make a GET request to fetch project data
  const response = await axios.get("https://api.example.com/projects");
  return response.data; // Return the data from the response
};
