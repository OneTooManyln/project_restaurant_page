const home = function () {
  const content = document.querySelector("#content");

  const div = document.createElement("div");
  div.classList.add("home-main-content");
  content.appendChild(div);

  // Add background image to content class
  content.style.backgroundImage = "url(../img/pinar-kucuk-unsplash.jpg)";
};

export default home;
