import { project } from "./classProject.js";
import { app } from "./classApp.js";

class Task {
  taskName = "";
  memberName = "";
  taskDescription = "";
  deadline = "";
  workflowType = "";

  constructor(taskName, memberName, taskDescription, deadline, workflowType) {
    this.taskName = taskName;
    this.memberName = memberName;
    this.taskDescription = taskDescription;
    this.deadline = deadline;
    this.workflowType = workflowType;
  }

  createTask(taskname, member, description, duedate, workflow) {
    const taskList = app.projects.currentProject.querySelector(
      `.task-list-${workflow}`
    );
    const htmlTask = `<div class="task-${workflow}-${taskname} task">
    <p class="task-name">${taskname}</p>
  </div>`;

    app.projects[0].tasks.push(
      new Task(taskname, member, description, duedate, workflow)
    );
    console.log(app);
    taskList.insertAdjacentHTML("beforeend", htmlTask);
  }

  // displayTaskDetails(taskname, member, description, duedate, workflow) {}
}

export const task = new Task();
