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

  // Add img container
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  menuContent.appendChild(imgContainer);
};

export default menu;
