function fishes() {
  let images = 36;
  let tempImages = 40;
  let w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  function fishJump(peix, reflex, i) {
    setTimeout(function () {
      let angle = Math.PI - (Math.PI / (images / 2)) * i;
      let x1 = Math.sin(angle) * 250 + 400;
      let y1 = 290 - Math.cos(angle) * 250;
      peix.setAttribute("x", x1);
      peix.setAttribute("y", y1);
      peix.setAttribute(
        "transform",
        "rotate(" + angle * 57.2957795 + " " + x1 + " " + y1 + ")"
      );
      angle = Math.PI * 2 + (Math.PI / (images / 2)) * i;
      let x2 = 400 + Math.sin(angle) * 250;
      let y2 = 290 - Math.cos(angle) * 250;
      reflex.setAttribute("x", x2);
      reflex.setAttribute("y", y2);
      reflex.setAttribute(
        "transform",
        "rotate(" + angle * 57.2957795 + " " + x2 + " " + y2 + ")"
      );
    }, i * tempImages);
  }
  function createFish(peix, reflex, xaf) {
    for (let i = 0; i < images; i++) {
      fishJump(peix, reflex, i);
    }
    function camviaPropietats(a, i) {
      setTimeout(function () {
        a.style.display = "block";
      }, 9 * tempImages + i * 2);
      setTimeout(function () {
        a.style.opacity = 0;
      }, 9 * tempImages + 50 + i * 2);
      setTimeout(function () {
        a.style.display = "none";
        a.setAttribute("cx", a.getAttribute("cx") - 250 * 2);
        a.style.opacity = 1;
      }, 9 * tempImages + 50 + i * 2 + 200);
      setTimeout(function () {
        a.style.display = "block";
      }, 27 * tempImages + i * 2);
      setTimeout(function () {
        a.style.opacity = 0;
      }, 27 * tempImages + 50 + i * 2);
    }
    for (let i = 0; i < 50; i++) {
      let a = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      let tmp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      let w = Math.floor(Math.random() * 5) + 5;
      w = 9 - (tmp * 8) / 100;
      let sgn = Math.random() > 0.5 ? 1 : -1;
      a.setAttribute("cx", 650 + x * sgn);
      a.setAttribute("cy", 300 - y);
      a.setAttribute("r", w);
      a.setAttribute("fill", "white");
      a.style.opacity = Math.random();
      xaf.appendChild(a);
      camviaPropietats(a, i);
    }
    function camviaPropietatsElipse(a, i) {
      setTimeout(function () {
        a.style.display = "block";
      }, 9 * tempImages + i * 70);
      setTimeout(function () {
        a.style.opacity = 0;
      }, 9 * tempImages + 50 + i * 100);
      setTimeout(function () {
        a.style.display = "none";
        a.setAttribute("cx", a.getAttribute("cx") - 250 * 2);
        a.style.opacity = 1;
      }, 27 * tempImages + 100);
      setTimeout(function () {
        a.style.display = "block";
      }, 27 * tempImages + i * 100 + 100);
      setTimeout(function () {
        a.style.opacity = 0;
      }, 27 * tempImages + 50 + i * 150 + 100);
    }
    for (let i = 0; i < 10; i++) {
      let a = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      a.setAttribute("cx", 650);
      a.setAttribute("cy", 290);
      a.setAttribute("rx", 40 + i * 10);
      a.setAttribute("ry", 10 + (i * 10 * 10) / 40);
      a.setAttribute("stroke-width", 1 + (10 - i) / 10);
      xaf.appendChild(a);
      camviaPropietatsElipse(a, i);
    }
  }
  function fishAction() {
    let y = Math.floor(Math.random() * (h - 200));
    let x = Math.floor(Math.random() * w);
    let m = (y * 700) / h + 200;
    let newFish = document.createElement("DIV");
    newFish.className = "suportPeix";
    newFish.style.top = y + "px";
    newFish.style.left = x + m > w ? w - m + "px" : x + "px";
    if (Math.random() > 0.5) newFish.style.transform = "scale(-1,1)";
    newFish.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="' +
      m +
      '" height="' +
      m +
      '" viewBox="0 0 800 800"><g mask="url(#mask)" ><use peix href="#peix" x="400" y="700"  /></g><g mask="url(#maskReflex)" ><use reflex href="#reflex" x="400" y="140" /></g><g xaf ></g></svg>';
    document.body.insertBefore(newFish, document.querySelector("#sortida"));
    let grad = "url(#grad" + Math.floor(Math.random() * 5) + ")";
    if (Math.random() > 0.94) grad = "url(#vermell)";
    let peix = newFish.querySelector("use[peix]");
    peix.setAttribute("fill", grad);
    let reflex = newFish.querySelector("use[reflex]");
    reflex.setAttribute("fill", grad);
    let xaf = newFish.querySelector("g[xaf]");
    createFish(peix, reflex, xaf);
    setTimeout(function () {
      document.body.removeChild(newFish);
    }, 3000);
  }
  function temporitzadorPeix() {
    for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
      setTimeout(fishAction, i * 500);
    }
    setTimeout(function () {
      temporitzadorPeix();
    }, 1000 + Math.random() * 3000);
  }
  temporitzadorPeix();
}
window.addEventListener("DOMContentLoaded", function () {
  fishes();
});
timeoutResize = setTimeout("", 1);
window.onresize = function () {
  clearTimeout(timeoutResize);

  timeoutResize = setTimeout(function () {
    location.reload();
  }, 250);
};
