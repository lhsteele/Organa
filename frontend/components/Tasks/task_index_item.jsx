import React from 'react';
import { Link } from 'react-router-dom';
import ListListShow from '../Lists/list_list_show';

const TaskIndexItem = ({ task }) => (
  <li key={task.id}>
    <img src=""/>
    <label>{task.name}</label>
  </li>
)

export default TaskIndexItem;