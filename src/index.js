import loadPage from "./loadPage";
import home from "./homePage";
import menu from "./menuPage";
import about from "./aboutPage";
import empty from "./emptyPage";

loadPage();

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");

homeTab.addEventListener("click", function () {
  empty();
  home();
});

menuTab.addEventListener("click", function () {
  empty();
  menu();
});

aboutTab.addEventListener("click", function () {
  empty();
  about();
});
console.log(aboutTab);
