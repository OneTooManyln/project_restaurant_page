const renderHeader = function () {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

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
};

export default renderHeader;
