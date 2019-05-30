// import React from 'react';
// import { Link } from 'react-router-dom';

// class ListShow extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       project: props.project
//     }
//   }

//   componentDidMount() {
//     this.props.requestList(this.props.project.id)
//     .then(list => this.props.requestTasks(list.id))
//   debugger
//   }

//   render() {
//     debugger
//     let tasks = this.props.tasks.forEach(task => {
//       return (
//         <TaskIndexItem 
//           key={task.id}
//           task={task}
//           deleteTask={this.props.deleteTask}
//         />
//       )
//     })
//     return (
//       <div>
//         This is the list show page
//         <ul>
//           {tasks}
//         </ul>
//       </div>
//     )
//   }
// }

// export default ListShow;