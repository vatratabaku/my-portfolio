import React from "react";
import "./css/Loading.css"; // Import the CSS for your loading animation

function Loading() {
  return (
    <div className="loading-container">
      <div className="hollow-dots-spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loading;
