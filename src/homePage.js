const home = function () {
  const content = document.querySelector("#content");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("h-content-container");
  content.appendChild(contentContainer);

  // Add homeContent container
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  contentContainer.appendChild(homeContent);

  //Add h1 to homeContent
  const title = document.createElement("h1");
  title.innerText = "TRES LECHES PANADERIA";
  homeContent.appendChild(title);
};

export default home;
