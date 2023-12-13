
import React from 'react';

const Portfolio = () => {
  // Sample project data, replace it with your actual project details
  const projects = [
    {
      title: 'Surf Report',
      description: 'Description of Surf Report project.',
      stack: 'MERN Stack',
      image: '/assets/images/surf-report.png',
    },
  ];

  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.stack}</p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;