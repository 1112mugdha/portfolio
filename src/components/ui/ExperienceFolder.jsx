import React from 'react';
import FolderCard from './FolderCard';

export default function ExperienceFolder({ 
  number = '01', 
  title, 
  role, 
  company,
  organization,
  shortDescription, 
  about,
  to = '#' 
}) {
  const displayTitle = role || title;
  const displayOrg = organization || company || (role ? title : null);

  return (
    <FolderCard 
      number={number}
      title={displayTitle}
      organization={displayOrg}
      category="INTERNSHIP"
      description={shortDescription || about}
      to={to}
      tabLabel={`${number} — EXPERIENCE`}
      tabColor="lime"
    />
  );
}
