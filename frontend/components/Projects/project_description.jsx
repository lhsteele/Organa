import React from 'react';

const ProjectDescription = ({ project }) => (
  <div className="list-show-project-description">
    <label className="list-show-description-label">Description</label>
    <p className="project-desc-textarea">
      {project.description}
    </p>
  </div>
);

export default ProjectDescription