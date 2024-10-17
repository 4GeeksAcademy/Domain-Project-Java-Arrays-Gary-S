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
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let r = 0; r < noun.length; r++) {
          console.log(pronoun[i] + adj[j] + noun[r] + ".com");
        }
      }
    }
  }
  domainGenerator();
};
