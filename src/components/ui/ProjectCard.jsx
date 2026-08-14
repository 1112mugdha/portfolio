import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProjectCard(props) {
  const p = props.project || props;
  const id = p.id;
  const title = p.title;
  const category = p.category;
  const description = p.shortDescription || p.description || p.subtitle;
  const image = p.heroImage || p.image;
  const preset = p.preset !== 'default' && props.preset ? props.preset : (id || 'default');
  const to = props.to && props.to !== '#' ? props.to : `/work/${id}`;
  const aspectRatio = p.aspectRatio || props.aspectRatio || '4/3';

  return (
    <Link to={to} className="project-card-container">
      {/* Contained Image Frame with tailored CSS preset placeholder */}
      <div className="project-card-image-frame">
        <ImagePlaceholder 
          preset={preset}
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
