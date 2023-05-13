import renderHeader from "./headerPage";
import home from "./homePage";

const loadPage = function () {
  renderHeader();
  home();
};

export default loadPage;
