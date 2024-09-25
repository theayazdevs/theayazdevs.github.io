// Import React and ReactDOM to render the app
import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
// Import the main App component and global styles (Tailwind or custom CSS)
import App from "./App";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
