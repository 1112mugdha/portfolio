import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProjectCard({ 
  id,
  title, 
  category, 
  description, 
  image, 
  preset = 'default',
  to = '#',
  aspectRatio = '4/3' 
}) {
  const activePreset = preset !== 'default' ? preset : id;

  return (
    <Link to={to} className="project-card-container">
      {/* Contained Image Frame with tailored CSS preset placeholder */}
      <div className="project-card-image-frame">
        <ImagePlaceholder 
          preset={activePreset}
          src={image} 
          label="IMAGE PREVIEW" 
          aspectRatio={aspectRatio} 
          alt={title}
        />
      </div>

      {/* Card Content */}
      <div className="project-card-body">
        <div>
          <span className="badge-category">
            {category}
          </span>
          <h3 className="project-card-title">
            {title}
          </h3>
          <p className="project-card-desc">
            {description}
          </p>
        </div>

        <div className="project-card-footer">
          <span>VIEW PROJECT</span>
          <span className="project-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
