import { app } from "./classApp.js";
import { userList } from "./classUser.js";
import { project } from "./classProject.js";
import { task } from "./classTask.js";
import { usersPresent } from "./classUser.js";

const taskListInprogress = document.querySelector(".task-list-inprogress");

const loginPage = document.querySelector(".login-page");
const btnLogout = document.querySelector(".btn-logout");
const projectBoard = document.querySelector(".project-board");
const navigationBar = document.querySelector(".navigation-bar");
const adminHomePage = document.querySelector(".admin-home-page");
const memberHomePage = document.querySelector(".member-home-page");
const adminAccountPage = document.querySelector(".admin-account-page");
const memberAccountPage = document.querySelector(".member-account-page");
const addProjectPage = document.querySelector(".add-project-page");
const addMemberPage = document.querySelector(".add-member-page");
const addTaskPage = document.querySelector(".add-task-page");
const btnSignin = document.querySelector(".btn-sign-in");
const btnCreateNewAccount = document.querySelector(".btn-create-new-account");
const btnAddProject = document.querySelector(".btn-add-project");
const btnCreateProject = document.querySelector(".btn-create-project");
const btnAddMember = document.querySelector(".btn-add-member");
const btnAddTeamMember = document.querySelector(".btn-add-team-member");
const btnAddTask = document.querySelector(".btn-add-task");
const btnCreateTask = document.querySelector(".btn-create-task");
const inputUserName = document.querySelector(".input-existing-user-name");
const inputUserPassword = document.querySelector(
  ".input-existing-user-password"
);
const inputProjectName = document.querySelector(".input-project-name");
const inputTaskName = document.querySelector(".input-task-name");
const inputTaskDescription = document.querySelector(".input-task-description");
const inputDueDate = document.querySelector(".input-due-date");
const selectMember = document.querySelector(".select-member");
const selectWorkflow = document.querySelector(".select-workflow");
const selectProjectList = document.querySelector(".project-list");
const checkBoxes = document.querySelectorAll(".checkbox");

app.displayCurrentPage(loginPage);

btnSignin.addEventListener("click", function () {
  if (!inputUserName.value || !inputUserPassword.value) {
    alert("Kindly enter details");
    return;
  }

  if (usersPresent.isValidUser(inputUserName.value, inputUserPassword.value)) {
    app.currentUser = inputUserName.value;
    userList.forEach((user) => {
      if (user.userName == inputUserName.value) {
        usersPresent.displayUserHomePage(user.isAdmin);
      }
    });
    return;
  }
  alert("Invalid username or password. Please try again.");
});

btnLogout.addEventListener("click", function () {
  app.displayCurrentPage(loginPage);
  app.hideCurrenPage(navigationBar);
  app.hideCurrenPage(adminHomePage);
  app.hideCurrenPage(memberHomePage);
  app.hideCurrenPage(adminAccountPage);
  app.hideCurrenPage(memberAccountPage);
  app.hideCurrenPage(navigationBar);
});

btnAddProject.addEventListener("click", function () {
  app.displayCurrentPage(addProjectPage);
});

btnCreateProject.addEventListener("click", function () {
  app.hideCurrenPage(addProjectPage);
  project.createProject(inputProjectName.value);
  app.displayCurrentPage(projectBoard);
});

btnAddMember.addEventListener("click", function () {
  app.displayCurrentPage(addMemberPage);
});

btnAddTeamMember.addEventListener("click", function () {
  app.hideCurrenPage(addMemberPage);
});

btnAddTask.addEventListener("click", function () {
  app.displayCurrentPage(addTaskPage);
});

btnCreateTask.addEventListener("click", function () {
  app.hideCurrenPage(addTaskPage);
  task.createTask(
    inputTaskName.value,
    selectMember.value,
    inputTaskDescription.value,
    inputDueDate.value,
    selectWorkflow.value
  );
});

selectProjectList.addEventListener("change", function () {
  project.displayProject(selectProjectList.value);
  app.displayCurrentPage(projectBoard);
});

btnAddTeamMember.addEventListener("click", function () {
  const checkedValues = [];
  checkBoxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  });
  project.getMembersList(checkedValues);
});

adminHomePage.addEventListener("click", function (e) {
  const value = e.target;
  console.log(value.getAttribute("class"));
});
