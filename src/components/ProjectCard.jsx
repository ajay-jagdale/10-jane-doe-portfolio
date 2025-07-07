import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden group transition duration-500 border border-white/10 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/20">
      <div className="overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
        <p className="text-text-secondary mb-4 text-sm h-16">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.caseStudyUrl} className="font-bold text-primary hover:underline inline-flex items-center">
          View Case Study 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
