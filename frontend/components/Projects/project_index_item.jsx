import React from 'react';

const ProjectIndexItem = ({ project, deleteProject }) => (
  <li>
    <div>
      <label>{project.name}</label>
    </div>
  </li>
)

export default ProjectIndexItem;