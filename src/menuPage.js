const menu = function () {
  const content = document.querySelector("#content");

  // Add container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  content.appendChild(contentContainer);

  // Add menu mainContent
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  contentContainer.appendChild(menuContent);
};

export default menu;
