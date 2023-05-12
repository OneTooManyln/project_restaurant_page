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
  const menuCards = document.createElement("div");
  menuCards.classList.add("menu-cards");
  menuContent.appendChild(menuCards);

  for (let i = 0; i < 3; i++) {
    console.log("this works too");
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCards.appendChild(menuCard);
  }
};

export default menu;
