import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import "./styles.css";

const navButtons = document.querySelectorAll("nav li");

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.textContent === "Home") {
      loadHome();
    } else if (button.textContent === "About") {
      loadAbout();
    } else {
      loadMenu();
    }
  });
});
