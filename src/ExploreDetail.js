// ExploreDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './Exploredata';
import './Explore.css';

const ExploreDetail = () => {
  const { id } = useParams();
  const item = data.find((entry) => entry.id === parseInt(id));

  if (!item) {
    return <div className="explore-detail">Item not found</div>;
  }

  return (
    <div className="explore-detail fade-slide">
      

      <div className="detail-content">
        <h1>{item.title}</h1>
        <p className="detail-description">{item.description}</p>

        <div className="detail-extra">
          <h3>Historical Significance</h3>
          <p>
            This artifact or artwork holds immense cultural, artistic, and historical significance.
            Its presence in the Louvre reflects the global journey of human creativity, power, and beliefs.
            Scholars have studied its composition, symbolism, and influence for decades.
          </p>

          <h3>Fun Facts</h3>
          <ul>
            <li>It has been viewed by millions of visitors globally.</li>
            <li>Featured in books, films, and documentaries.</li>
            <li>Subject of academic debates and artistic analysis.</li>
          </ul>

          <h3>Visual Style & Technique</h3>
          <p>
            The use of color, shape, material, and technique in this work showcases the genius of its creator(s).
            Whether it's brushstroke, chisel marks, or symbolic motifs — every detail contributes to its timeless appeal.
          </p>
        </div>

        <Link className="back-button" to="/explore">← Back to Explore</Link>
      </div>
    </div>
  );
};

export default ExploreDetail;