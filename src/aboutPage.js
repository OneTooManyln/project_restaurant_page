const about = function () {
  const content = document.querySelector("#content");

  // Add container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("a-content-container");
  content.appendChild(contentContainer);

  // Add container for about title
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  contentContainer.appendChild(titleContainer);

  // Add title to container
  const aboutTitle = document.createElement("h1");
  aboutTitle.innerText = "ABOUT US";
  titleContainer.appendChild(aboutTitle);
};

export default about;
