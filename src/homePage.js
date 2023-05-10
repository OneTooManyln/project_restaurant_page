const home = function () {
  const content = document.querySelector("#content");

  const mainContent = document.createElement("div");
  mainContent.classList.add("home-main-content");
  content.appendChild(mainContent);

  // Add background image to content class
  content.style.backgroundImage = "url(../img/pinar-kucuk-unsplash.jpg)";
};

export default home;
