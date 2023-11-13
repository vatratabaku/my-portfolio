import React from 'react';
import './css/Loading.css'; // Import the CSS for your loading animation

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
      <p style={{color: "#FB4BFF"}}>Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
