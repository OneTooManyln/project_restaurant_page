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
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-cards");
  menuContent.appendChild(menuCard);

  // img 1
};

export default menu;
