// Import React and Router for routing between pages
//import React from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Import header and footer components (shown on every page)
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import the routes (handles navigation between different pages)
import Routes from "./router";
function App() {
  return (
    // Set up the router for navigation
    <Router>
      {/* Display the header at the top of every page */}
      <Header />
      {/* Handle page content based on current route */}
      <Routes />
      {/* Display the footer at the bottom of every page */}
      <Footer />
    </Router>
  );
}
export default App;
