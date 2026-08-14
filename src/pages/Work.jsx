import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FolderCard from '../components/ui/FolderCard';
import { projectsData } from '../data/projects';

export default function Work() {
  return (
    <div className="py-6">
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'WORK / ASSIGNMENTS' }]} />
      
      <PageHeader 
        title="ASSIGNMENTS"
        subtitle="Things I made because someone gave me a brief."
        badge="COURSEWORK & BRIEFS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 my-10">
        {projectsData.map((project) => (
          <FolderCard
            key={project.id}
            number={project.number}
            title={project.title}
            category={project.category}
            description={project.shortDescription}
            to={`/work/${project.id}`}
            tabLabel={`${project.number} — ASSIGNMENT`}
            tabColor="lime"
          />
        ))}
      </div>
    </div>
  );
}
