(() => {
  "use strict";
  (function () {
    const e = document.querySelector("#content"),
      t = document.createElement("div");
    t.classList.add("header"), e.appendChild(t);
    const n = document.createElement("ul");
    t.appendChild(n);
    const d = document.createElement("li");
    (d.innerText = "HOME"), n.appendChild(d);
    const c = document.createElement("li");
    (c.innerText = "MENU"), n.appendChild(c);
    const o = document.createElement("li");
    (o.innerText = "ABOUT"), n.appendChild(o);
  })(),
    (function () {
      const e = document.querySelector("#content"),
        t = document.createElement("div");
      t.classList.add("content-container"), e.appendChild(t);
      const n = document.createElement("div");
      n.classList.add("menu-content"), t.appendChild(n);
      const d = document.createElement("div");
      d.classList.add("menu-cards"), n.appendChild(d);
      const c = ["img-1", "img-2", "img-3", "img-4"];
      for (let e = 0; e < c.length; e++) {
        console.log("this works too");
        const t = document.createElement("div");
        t.classList.add("menu-card"), d.appendChild(t);
        const n = document.createElement("div");
        n.classList.add("card-image"),
          n.setAttribute("id", c[e]),
          t.appendChild(n);
      }
    })(),
    console.log("this works");
})();
