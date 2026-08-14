import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ExperienceFolder from '../components/ui/ExperienceFolder';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <div className="py-6">
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'EXPERIENCE' }]} />
      
      <PageHeader 
        title="EXPERIENCE"
        subtitle="Internships, design roles, and field outreach foundations."
        badge="INTERNSHIPS & ROLES"
      />

      {/* 2 Folder cards for Modi Builders and White Volunteers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-4xl">
        {experienceData.map((exp) => (
          <ExperienceFolder
            key={exp.id}
            number={exp.number}
            title={exp.title}
            role={exp.role}
            shortDescription={exp.shortDescription}
            to={`/experience/${exp.id}`}
          />
        ))}
      </div>
    </div>
  );
}
