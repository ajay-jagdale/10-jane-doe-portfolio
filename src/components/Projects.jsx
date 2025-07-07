import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary relative">
        My Work
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
