import renderHeader from "./header";

const home = function () {
  const content = document.querySelector("#content");

  // Add header
  renderHeader();

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  content.appendChild(homeContent);

  // Add mainContent container
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  homeContent.appendChild(mainContent);

  //Add h1 to mainContent
  const title = document.createElement("h1");
  title.innerText = "TRES LECHES PANADERIA";
  mainContent.appendChild(title);
};

export default home;
