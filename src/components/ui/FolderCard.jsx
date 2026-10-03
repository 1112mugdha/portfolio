import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderCard({ 
  number = '01', 
  title, 
  organization,
  category, 
  description, 
  to = '#',
  tabLabel,
  tabColor = 'lime'
}) {
  return (
    <Link to={to} className="folder-link-wrapper">
      <div className="folder-card-box">
        {/* Lime/Pink Folder Tab */}
        <div 
          className="folder-card-tab"
          style={{
            backgroundColor: tabColor === 'pink' ? '#E96F98' : '#D7F23A'
          }}
        >
          <span>{tabLabel || `${number} — FOLDER`}</span>
        </div>

        {/* Content Area */}
        <div className="folder-card-content-area">
          {category && (
            <span className="badge-category" style={{ backgroundColor: '#171515', color: '#F7F3EA' }}>
              {category}
            </span>
          )}
          
          <h3 className="folder-company-title">
            {title}
          </h3>

          {organization && (
            <div className="folder-organization-subtitle">
              {organization}
            </div>
          )}
          
          <p className="folder-role-text">
            {description || 'Experience details and key responsibilities will go here.'}
          </p>
        </div>

        {/* Action Footer */}
        <div className="folder-action-bar">
          <span>OPEN FOLDER</span>
          <span className="folder-arrow-icon">→</span>
        </div>
      </div>
    </Link>
  );
}
