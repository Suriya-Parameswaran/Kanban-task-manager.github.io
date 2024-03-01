class App {
  currentUser = undefined;
  projects = [];

  displayCurrentPage(currentPage) {
    currentPage.classList.remove("hidden");
  }

  hideCurrenPage(currentPage) {
    currentPage.classList.add("hidden");
  }
}

export const app = new App();
