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

  // Add card container
  const menuCards = document.createElement("div");
  menuCards.classList.add("menu-cards");
  menuContent.appendChild(menuCards);

  const idName = ["img-1", "img-2", "img-3", "img-4"];

  for (let i = 0; i < idName.length; i++) {
    console.log("this works too");
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCards.appendChild(menuCard);

    // Add dummy text to cards
    menuCard.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit massa quis quam ultricies.</p>`;

    // Add class for img
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-image");
    cardImg.setAttribute("id", idName[i]);
    menuCard.appendChild(cardImg);
  }
};

export default menu;
