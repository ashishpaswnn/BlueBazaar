import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./firebaseConfig"; // initialize firebase

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
