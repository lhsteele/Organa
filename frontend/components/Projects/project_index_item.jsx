import React from 'react';


const ProjectIndexItem = ({ project, deleteProject, openModal }) => (
  <li>
    <div>
      {/* <button className="project-button" onClick={}> */}
        <div className="project-square">
          {project.name}
        </div>
        <button
          onClick={() => openModal('update')}>
          dots 
        </button>
    </div>
  </li>
)

export default ProjectIndexItem;