import renderHeader from "./headerPage";
import home from "./homePage";
import menu from "./menuPage";

const loadPage = function () {
  renderHeader();
  /* home(); */
  menu();
};

export default loadPage;
