const home = function () {
  const content = document.querySelector("#content");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  content.appendChild(homeContent);

  // Add header
  const header = document.createElement("div");
  header.classList.add("header");
  homeContent.appendChild(header);

  // Add list for links to pages
  const pageLinks = document.createElement("ul");
  header.appendChild(pageLinks);

  // Add home page link
  const homeLink = document.createElement("li");
  homeLink.innerText = "HOME";
  pageLinks.appendChild(homeLink);

  // Add menu page link
  const menuLink = document.createElement("li");
  menuLink.innerText = "MENU";
  pageLinks.appendChild(menuLink);

  // Add menu page link
  const aboutLink = document.createElement("li");
  aboutLink.innerText = "ABOUT";
  pageLinks.appendChild(aboutLink);

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
