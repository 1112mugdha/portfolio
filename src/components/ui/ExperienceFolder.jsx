import React from 'react';
import FolderCard from './FolderCard';

export default function ExperienceFolder({ 
  number = '01', 
  title, 
  role, 
  shortDescription, 
  to = '#' 
}) {
  return (
    <FolderCard 
      number={number}
      title={title}
      category={role}
      description={shortDescription}
      to={to}
      tabLabel={`${number} — EXPERIENCE`}
      tabColor="lime"
    />
  );
}
