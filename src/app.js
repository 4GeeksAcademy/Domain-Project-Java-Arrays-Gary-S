/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["their", "his"];
  let adj = ["super", "giant"];
  let noun = ["athlete", "dog"];

  function domainGenerator() {
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          document.querySelector("p").innerHTML += `<h2>
              ${p}${a}${n}.com
            </h2>`;
        }
      }
    }
  }
  domainGenerator();
};
