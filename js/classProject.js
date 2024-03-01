import { app } from "./classApp.js";
const projectBoard = document.querySelector(".project-board");
const projectList = document.querySelector(".project-list");
const selectMember = document.querySelector(".select-member");

class Project {
  projectName = "";
  currentProject = undefined;
  teamMembers = [];
  tasks = [];

  constructor(projectName) {
    this.projectName = projectName;
  }

  createProject(projectName) {
    this.projectName = projectName;
    app.projects.push(new Project(projectName));
    const html = `<div class="board ${projectName} hide-project">
    <p class="project-name">${projectName}</p>
    <div class="workflow">
      <div class="workflow1">
        <h3>In-progress</h3>
        <div class="task-list-inprogress"></div>
      </div>
      <div class="workflow2">
        <h3>In-review</h3>
        <div class="task-list-inreview"></div>
      </div>
      <div class="workflow3">
        <h3>Completed</h3>
        <div class="task-list-completed"></div>
      </div>
    </div>
    </div>`;
    const htmlList = `<option>${projectName}</option>`;

    projectBoard.insertAdjacentHTML("beforeend", html);
    projectList.insertAdjacentHTML("afterbegin", htmlList);
    this.displayProject(projectName);
  }

  displayProject(projectName) {
    const hideProject = document.querySelectorAll(".board");
    const projectToShow = document.getElementsByClassName(`${projectName}`);

    app.projects.currentProject = projectToShow[0];
    console.log(app.projects.currentProject);
    hideProject.forEach((project) => {
      project.classList.add("hide-project");
    });

    projectToShow[0].classList.remove("hide-project");
  }

  getMembersList(memberList) {
    this.teamMembers = memberList;
    memberList.forEach((member) => {
      const htmlMember = `<option>${member}</option>`;
      selectMember.insertAdjacentHTML("beforeend", htmlMember);
    });
  }
}

export const project = new Project();
