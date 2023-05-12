const menu = function () {
  const content = document.querySelector("#content");

  // Add menu mainContent container
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  content.appendChild(menuContent);
};

export default menu;
