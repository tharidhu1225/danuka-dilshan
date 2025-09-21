import React from 'react';
import './maintaince/Maintenance.css'; // Import styles

export default function Maintenance() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1>🚧 Site Under Maintenance 🚧</h1>
        <p>We’ll be back shortly. Thank you for your patience!</p>
        <div className="progress-bar">
          <div className="progress-bar-inner"></div>
        </div>
      </div>
    </div>
  );
}
