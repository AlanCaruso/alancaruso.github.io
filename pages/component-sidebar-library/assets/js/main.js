const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  console.log("click");
});

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
