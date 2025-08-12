// Explore.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';
import data from './Exploredata';

const Explore = () => {
const [visibleCount, setVisibleCount] = useState(8); // 4x2 = 8 cards


  return (
    <div className="explore-container fade-slide">
      <h1 className="explore-heading">Discover Unique Masterpieces</h1>

      <div className="explore-grid">
        {data.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="explore-card">
            <img src={item.image} alt={item.title} onError={(e) => e.target.style.display = 'none'} />
            <h3>{item.title}</h3>
            <p>{item.short}</p>
 <Link to={`/explore/${item.id}`} className="learn-more-button">
  Learn More
</Link>

          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="explore-load-more">
          <button onClick={() => setVisibleCount(visibleCount + 12)}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Explore;
