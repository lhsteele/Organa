import React from 'react';

const ProjectIndexItem = ({ project, deleteProject }) => (
  <li>
    <div>
      {/* <button className="project-button" onClick={}> */}
        <div className="project-square">
          {project.name}
        </div>
      {/* </button> */}
    </div>
  </li>
)

export default ProjectIndexItem;