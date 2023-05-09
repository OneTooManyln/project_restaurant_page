const home = function () {
  const content = document.querySelector("#content");

  const div = document.createElement("div");
  div.classList.add("home-main-content");
  content.appendChild(div);
};

export default home;
