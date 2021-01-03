'use strict'

const shareBtn = document.querySelector("#shareBtn");
const shareTab = document.querySelector(".share-tab");
const shareTabMob = document.querySelector(".share-tab-mob");

const overlay = document.querySelector(".overlay");
const share = document.querySelector(".share");
const  arrowL = document.querySelector("#pathL");
const  arrowD = document.querySelector("#pathD");

function showTab() {
    shareTab.classList.toggle("hidden");
    overlay.classList.toggle("hidden")
    shareTabMob.classList.toggle("hidden");
    share.style.backgroundColor = "hsl(217, 19%, 35%)";
    arrowL.classList.toggle("hidden");
    arrowD.classList.toggle("hidden");
}

shareBtn.addEventListener("click", showTab);

if(shareTab.classList.contains("hidden"))
overlay.addEventListener("click", function() {
    showTab();
    share.style.backgroundColor = "hsl(210, 46%, 95%)";
});

