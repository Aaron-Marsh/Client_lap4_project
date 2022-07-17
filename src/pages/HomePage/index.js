import React, { useState, useEffect } from "react";
import { LoginFooter, SearchBar } from "../../components/index";
import "./home.css";

export const HomePage = () => {
  //Background related functions for fish

  function fishes() {
    let water = document.querySelector(".background-lower");
    let images = 36;
    let tempImages = 40;
    let w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let h = water.offsetHeight * 0.75;
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
        let a = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        let tmp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        let w = Math.floor(Math.random() * 5) + 5;
        w = 9 - (tmp * 8) / 100;
        let sgn = Math.random() > 0.5 ? 1 : -1;
        a.setAttribute("cx", 650 + x * sgn);
        a.setAttribute("cy", 300 - y);
        if (w > 0) {
          a.setAttribute("r", w);
        }
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
        let a = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "ellipse"
        );
        a.setAttribute("cx", 650);
        a.setAttribute("cy", 290);
        a.setAttribute("rx", 40 + i * 10);
        a.setAttribute("ry", 10 + (i * 10 * 10) / 40);
        a.setAttribute("strokeWidth", 1 + (10 - i) / 10);
        xaf.appendChild(a);
        camviaPropietatsElipse(a, i);
      }
    }
    function fishAction() {
      let y = Math.floor(Math.random() * (h - 200));
      let x = Math.floor(Math.random() * w);
      let m = (y * 700) / h + 200;
      let newFish = document.createElement("DIV");
      newFish.className = "newFish";
      newFish.style.top = y + "px";
      newFish.style.left = x + m > w ? w - m + "px" : x + "px";
      if (Math.random() > 0.5) newFish.style.transform = "scale(-1,1)";
      newFish.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="' +
        m +
        '" height="' +
        m +
        '" viewBox="0 0 800 800"><g mask="url(#mask)" ><use peix href="#peix" x="400" y="700"  /></g><g mask="url(#maskReflex)" ><use reflex href="#reflex" x="400" y="140" /></g><g xaf ></g></svg>';
      water.appendChild(newFish);
      let grad = "url(#grad" + Math.floor(Math.random() * 5) + ")";
      if (Math.random() > 0.94) grad = "url(#vermell)";
      let peix = newFish.querySelector("use[peix]");
      peix.setAttribute("fill", grad);
      let reflex = newFish.querySelector("use[reflex]");
      reflex.setAttribute("fill", grad);
      let xaf = newFish.querySelector("g[xaf]");
      createFish(peix, reflex, xaf);
      setTimeout(function () {
        water.removeChild(newFish);
      }, 3000);
    }
    function temporaryFish() {
      for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
        setTimeout(fishAction, i * 500);
      }
      setTimeout(function () {
        temporaryFish();
      }, 1000 + Math.random() * 3000);
    }
    temporaryFish();
  }
  useEffect(() => {
    fishes();
  }, []);
  let timeoutResize;
  window.onresize = function () {
    clearTimeout(timeoutResize);

    timeoutResize = setTimeout(function () {
      window.location.reload();
    }, 250);
  };

  //--------------------------
  //Scrolling functions for login footer

  const [showLoginFooter, setShowLoginFooter] = useState(false);

  useEffect(() => {
    let myScrollFunc = function () {
      console.log("hello");
      let y = window.scrollY;
      if (y >= 300) {
        setShowLoginFooter(true);
      } else {
        setShowLoginFooter(false);
      }
    };

    window.addEventListener("scroll", myScrollFunc);

    return () => {
      window.removeEventListener("scroll", myScrollFunc);
    };
  }, []);

  return (
    <>
      <div className="home-banner">
        <div className="background-upper">
          {/* <img
            alt=""
            className="background-image-upper"
            src={require("../../imgs/background.png")}
          ></img> */}
        </div>
        <div className="background-lower">
          <svg width="0" height="0">
            <defs>
              <mask id="mask">
                <rect x="0" y="0" width="800" height="290" fill="white" />
              </mask>
              <mask id="maskReflex">
                <rect x="0" y="290" width="800" height="290" fill="white" />
              </mask>
              <linearGradient id="grad0" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="vermell" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#cc0000" />
                <stop offset="50%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              <g id="peix" transform="translate(100,-100) scale(-2,2)">
                <path
                  id="silueta"
                  d="M96.806,50.581c-0.775,0.021-1.511,0.322-2.283,0.202c-0.016-0.053-0.03-0.151-0.038-0.202  c0.666-0.302,1.403-0.49,2.011-0.925c0.325-0.316,0.792-0.691,0.573-1.209c-0.242-1.068-1.218-1.729-2.06-2.307  c-1.007-0.707-2.14-1.173-3.214-1.735c-1.18-0.504-2.771-2.356-18.807-5.387c-5.913-1.133-11.902-1.648-12.152-1.836  c-5.526,0.102-11.099-6.188-12.797-6.691C47.776,30.317,47.581,31,47.452,31h0.002c-0.16,1-0.614,8.46,0.302,8.738  c-1.03,0.308-2.109,0.271-3.156,0.497c-1.72,0.33-10.451,2.965-14.923,3.992c-1.585,0.294-3.21,0.235-4.815,0.242  c-1.549-0.029-3.073-0.372-4.561-0.761c-1.817-0.518-16.438-6.635-16.537-6.133c0.038,4.065,2.203,6.819,3.75,10.432  c0.052,0.526,0.269,1.035,0.196,1.576c-0.858,2.793-4.111,5.208-4.913,8.098c0.006,0.556-0.234,1.051-0.438,1.554  c0.67,0.044,1.339,0.083,2.013,0.067c1.466-0.172,10.055-2.336,11.376-2.645c1.292-0.299,2.501-0.85,3.777-1.164  c0.725-0.173,1.377-0.548,2.104-0.669c1.443-0.188,2.901-0.367,4.359-0.225c1.016,0.104,2.027,0.203,3.029,0.42  c0.757,0.166,6.36,1.226,9.716,2.373c2.207,0.173,10.578,3.585,11.368,3.751c-1.289,2.099-1.147,3.252-1.48,5.746  c-0.216,0.879-0.254,1.888,0.359,2.614c0.278,0.264,0.731,0.277,1.044,0.069c4.525-4.812,9.603-6.665,9.82-7.348  c2.756,0.329,5.53,0.044,8.294,0.059c15.207-0.16,25.758-8.233,26.728-8.767c0.812-0.413,1.678-0.872,2.166-1.675  C97.422,51.488,97.287,50.769,96.806,50.581z "
                />
                <circle
                  id="ull"
                  cx="87"
                  cy="50"
                  r="2"
                  stroke="#331100"
                  strokeWidth="2"
                  fill="white"
                />
              </g>
              <g
                id="reflex"
                transform="translate(-100,-100) scale(2,2)"
                fillOpacity=".3"
              >
                <use href="#silueta" />
                <use href="#ull" />
              </g>
              <g stroke="none" strokeWidth="1" fill="none">
                <line x1="0" y1="290" x2="800" y2="290" />
                <circle cx="400" cy="290" r="250" />
              </g>
            </defs>
          </svg>
        </div>
      </div>
      <div className="home">
        <div className="home-intro">
          <img></img>
          <div className="home-intro-text">
            Read Herring allows you to find those words that have been missing
            from your life. You can search for books, find others who like what
            you like and get in touch, as also write all the fan theories you
            have conjured in our forum. Get reading!
          </div>
        </div>
        <div className="home-book"></div>
      </div>
      {showLoginFooter ? <LoginFooter /> : ""}
    </>
  );
};
