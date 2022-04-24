const sideBarButton = document.querySelector(".side-bar-button");
const sideBar = document.querySelector(".off-side-bar");

function showAndHide() {
  sideBar.classList.toggle("show-off-side");
  sideBar.classList.toggle("off-side-bar-shadow");
  sideBarButton.classList.toggle("side-bar-button-close");
}
function outerClick(event) {
  if (event.target != sideBarButton) {
    if (sideBar.classList.contains("show-off-side")) {
      sideBar.classList.remove("off-side-bar-shadow");
      sideBar.classList.remove("show-off-side");
      sideBarButton.classList.remove("side-bar-button-close");
    }
  }
}
sideBarButton.addEventListener("click", showAndHide);
document.addEventListener("click", outerClick);
