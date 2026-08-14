import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FolderCard from '../components/ui/FolderCard';
import { personalData } from '../data/personal';

export default function Personal() {
  return (
    <div className="py-6">
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'PERSONAL WORK' }]} />
      
      <PageHeader 
        title="PERSONAL WORK"
        subtitle="Things I made without a brief, deadline or professor telling me what to do."
        badge="SELF-INITIATED CREATIONS"
      />

      <div className="experience-grid-two my-10 max-w-4xl">
        {personalData.map((category) => (
          <FolderCard
            key={category.id}
            number={category.number}
            title={category.title}
            category={category.id === 'brand-concepts' ? 'BRANDING & VISUAL IDENTITY' : 'CREATIVE EXPERIMENTS'}
            description={category.subtitle}
            to={`/personal/${category.id}`}
            tabLabel={`${category.number} — PERSONAL PROJECT`}
            tabColor="lime"
          />
        ))}
      </div>
    </div>
  );
}
