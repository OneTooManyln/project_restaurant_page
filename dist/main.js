(() => {
  "use strict";
  !(function () {
    const e = document.querySelector("#content"),
      n = document.createElement("div");
    n.classList.add("home-content"),
      e.appendChild(n),
      (e.style.backgroundImage = "url(../img/pinar-kucuk-unsplash.jpg)");
    const t = document.createElement("div");
    t.classList.add("header"), n.appendChild(t);
    const c = document.createElement("ul");
    t.appendChild(c);
    const d = document.createElement("li");
    (d.innerText = "HOME"), c.appendChild(d);
    const l = document.createElement("li");
    (l.innerText = "MENU"), c.appendChild(l);
    const a = document.createElement("li");
    (a.innerText = "ABOUT"), c.appendChild(a);
    const o = document.createElement("div");
    o.classList.add("main-content"), n.appendChild(o);
    const i = document.createElement("h1");
    (i.innerText = "TRES LECHES PANADERIA"), o.appendChild(i);
  })(),
    console.log("this works");
})();
