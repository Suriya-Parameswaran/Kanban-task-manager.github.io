import { app } from "./classApp.js";

const displayPage = document.querySelectorAll(".hidden");
const registerPage = document.querySelector(".register-page");
const adminHomePage = document.querySelector(".admin-home-page");
const memberHomePage = document.querySelector(".member-home-page");
const navigationBar = document.querySelector(".navigation-bar");

class Users {
  allUsers = [];

  isValidUser(username, password) {
    return this.allUsers.some((user) => user.getIsValid(username, password));
  }

  displayUserHomePage(isAdmin) {
    displayPage.forEach((page) => {
      page.classList.add("hidden");
    });

    if (!isAdmin) {
      app.displayCurrentPage(memberHomePage);
      app.displayCurrentPage(navigationBar);
      return;
    }

    app.displayCurrentPage(adminHomePage);
    app.displayCurrentPage(navigationBar);
  }
}

class User {
  userName = "";
  password = "";
  isAdmin = true;
  projects = [];

  constructor(userName, password, isAdmin) {
    this.isAdmin = isAdmin;
    this.userName = userName;
    this.password = password;
  }

  getAllUsers() {
    return userList;
  }

  getIsValid(username, password) {
    return this.userName == username && this.password == password;
  }

  getUsersExceptCurrentUser() {}
}

const user1 = new User("1", "1", true);
const user2 = new User("2", "2", false);

export const userList = [user1, user2];

export const usersPresent = new Users();

userList.forEach((user) => {
  usersPresent.allUsers.push(user);
});
