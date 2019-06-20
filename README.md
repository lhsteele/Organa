## Organa


### Organa is a tongue-in-cheek Star Wars themed clone of Asana, a work managment tool.
Asana allows users to create and manage projects, assign tasks to team members, and track the progress of a project.


https://organa-app.herokuapp.com/#/


Organa is built with a PostGres Database and Rails in the backend, and React/Redux/Javascript in the front end. 

![Hero](/images/READMEHero.png)

### Key Features:

1. Splash:
  * Webpage with hero image, icons, and navigation links.

2. User Authentication: 
  * User can create an account
  * Login
  * Logout
  * User will be alerted if:
     * their credentials are invalid
     * email is already in use
     * email is not in the correct format
     * if their password doesn’t meet the criteria

3. Project:
  * Create: from the home page and nav bar, with a name and description.
  * Update: from the home page and nav bar, with a name and description.
  * Delete: project will be removed from the database completely.
  * Archived: removes a project from the sidebar project list. Can also be restored.
  * Projects are listed in the sidebar and on the home page.

4. Tasks: 
  * Create: from a project’s show page, with a name.
  * Update: from a project’s show page, with a name.
  * Complete: will remove a task from a project. 

5. Sidebar:
  * Has a Home button to help user navigate to the home page.
  * Lists the current user’s projects.
  * Project index links to each project’s show page.

6. UX/UI:
  * Page layout and core user interaction built to mimic that of Asana.
  * Modals in multiple areas of the app, implemented using two different techniques. 
  * Created all of the icons that are not Star Wars related.
  
  ![Detail](/images/ProjectIndexDetail.png)

### Modals:
There are multiple modals in the app, which I chose to implement in two different ways.
Modals for the user authentication process and the task update features were implemented with a separate modal class and component. Calling the action to open and close a modal is easy, and as the data contained by these modals were fairly minimal, this was a clean solution.
The modals for pop-up forms or drop down menus were all implemented by using local state to toggle a component visible or not. This solution worked well in these scenarios because they contain data that is more complex. Data was fetched either with additional logic, or by receiving it from a parent component, and this allowed me to do this in the relevant components. Visually, it also allowed me to place them in very specific positions on the page. 

Example of the project deletion modal (inline):
```
let deleteModal;
    if (this.state.showDeleteModal === true) {
      deleteModal = (
        <>
          <div className="grey-modal" onClick={this.handleClearModal}></div>
          <div className="delete-modal">
            <label className="delete-modal-header">Delete the "{this.props.project.name}" project?</label>
            <label className="delete-modal-subHeader">
              This will delete the project and any unassigned tasks that are 
              only in this project.
            </label>
            <div className="delete-modal-buttons">
              <button 
                className="cancel-delete-button"
                onClick={this.handleClearModal}>
                Cancel
              </button>
              <button
                className="delete-button"
                onClick={this.handleDelete}>
                Delete {this.props.project.name}
              </button>
            </div>
          </div>
        </>
      )
    }
   ```

Example of the edit task modal (separate modal component): 
```
function TaskModal({ editTaskUI, showDesc, closeElement, project }) {
  let component;
  if (editTaskUI === "new") {
    component = <CreateTaskFormContainer formType="new" project={project}/>
  } else if (editTaskUI === null) {
    component = <ProjectDescriptionContainer project={project} />
  } else {
    component = <EditTaskFormContainer formType="edit"/>
  }

  return (
    <div className="edit-task-views-background" onClick={closeElement}>
      <div className="edit-task-views-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}
```

### Nested components:
In my app, Tasks belong to a List, which belongs to a Project. Everything, from backend routes and database entries, to frontend ajax requests and action reducers, all had to be nested. This structure made CRUD more challenging as each action required a piece of data from another component. While it was one of the bigger challenges I faced, it was a great opportunity to go deeper in dealing with Redux state and how that works with React.

### Visual Layout:
While I wasn’t able to implement every UX/UI feature of Asana in the two-week time period, it was important to me that I replicate it as closely as possible, visually. This meant working with a grid layout and flexbox, using the right color scheme, and using Figma to create the appropriate icons. 


#### Next steps:
  * Implement the Teams feature.
  * Make it possible to have a Board view for projects. (Currently only List view available)
  * When creating or editing a task, have the task detail component auto-update as the user types in the form.
  * Clicking outside the form will also save the updated information.
  * Additional UI features such as animation on buttons to indicate a task has been completed.
 
##### Credit:
  * Light-saber icon on the project homepage made by Freepik from www.flaticon.com 
  * R2-D2 icon on the project homepage made by Webalys from www.flaticon.com
  
