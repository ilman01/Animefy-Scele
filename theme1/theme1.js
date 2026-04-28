// ==UserScript==
// @name         Animefy Scele
// @namespace    http://tampermonkey.net/
// @version      2026-04-27
// @description  Stressed? Don't worry, this will help!
// @author       You
// @match        https://scele.cs.ui.ac.id/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';



document.querySelectorAll('.block').forEach(el => {
  el.style.backgroundColor = "rgb(164 210 236 / 60%)";
});

document.querySelectorAll('.card').forEach(el => {
  el.style.backgroundColor = "rgb(164 210 236 / 60%)";
});

document.querySelectorAll('.list-group-item').forEach(el => {
  el.style.backgroundColor = "rgb(98 191 244 / 36%)";
});

document.querySelectorAll('.navbar-bootswatch').forEach(el => {
  el.style.backgroundColor = "#aacfe9";
});

document.querySelectorAll('.border').forEach(el => {
  el.style.setProperty("border-color", "#6595c4", "important");
});

document.getElementById("page").style.backgroundImage = 'url("https://i.imgur.com/Wrpr9tb.jpeg")';
document.getElementById("page").style.backgroundAttachment = 'fixed';
document.getElementById("page").style.backgroundSize = 'cover';
document.getElementById("page").style.backgroundPosition = 'center';

document.getElementById("region-main").style.backgroundColor = 'rgb(164 210 236 / 60%)'


const style = document.createElement('style');
style.innerHTML = `
  .list-group-item {
    background-color: rgb(98 191 244 / 36%) !important;
  }
`;
document.head.appendChild(style);



})();