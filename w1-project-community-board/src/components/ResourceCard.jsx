// src/components/ResourceCard.jsx
import React from 'react';

function ResourceCard({ title, type, description, link, date }) {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p className="resource-type">Type: {type}</p>
      <p>{description}</p>
      {link && (
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </p>
      )}
      {date && <p className="resource-date">Date: {date}</p>}
    </div>
  );
}

export default ResourceCard;
