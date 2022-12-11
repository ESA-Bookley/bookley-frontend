const sun =
  "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon =
  "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

const bodyElm = document.getElementById("body");
const nBar = document.getElementsByClassName("navBar")[0];
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const containerM = document.getElementsByClassName("theme-containerMob")[0];
const themeIconM = document.getElementById("theme-iconMob");
const accMenu = document.getElementById("accMenu");
const catNav = document.getElementById("catNav");
const catNavMob = document.getElementById("catNavMob");
const mobNavMenu = document.getElementById("mobNavMenu");
const footer = document.getElementById("footer");
const skillInfo = document.getElementsByClassName("skill-info");
const upFullName = document.getElementById("upFullName");
const upUsername = document.getElementById("upUsername");
const upEditIcon = document.getElementById("upEditIcon");

let theme = window.localStorage.getItem("colorMode") || "light";

container.addEventListener("click", setTheme);
containerM.addEventListener("click", setTheme);

let initTheme = () => {
  switch (window.localStorage.getItem("colorMode")) {
    case "dark":
      container.classList.remove("shadow-light");
      containerM.classList.remove("shadow-light");
      setTimeout(() => {
        container.classList.add("shadow-dark");
        containerM.classList.add("shadow-dark");
        themeIcon.classList.remove("change");
        themeIconM.classList.remove("change");
      }, 300);
      themeIcon.classList.add("change");
      themeIconM.classList.add("change");
      themeIcon.src = moon;
      themeIconM.src = moon;
      bodyElm.style.background = "var(--darkBG)";
      accMenu.classList.add("dark");
      catNav.classList.add("dark");
      catNavMob.classList.add("dark");
      mobNavMenu.classList.add("dark");
      footer.classList.add("dark");
      upFullName.classList.add("darkText");
      upUsername.classList.add("darkText");
      upEditIcon.classList.add("darkText");
      for (let i = 0; i < skillInfo.length; i++) {
        skillInfo[i].classList.add("dark");
      }
      break;

    default:
      container.classList.remove("shadow-dark");
      containerM.classList.remove("shadow-dark");
      setTimeout(() => {
        container.classList.add("shadow-light");
        containerM.classList.add("shadow-light");
        themeIcon.classList.remove("change");
        themeIconM.classList.remove("change");
      }, 300);
      themeIcon.classList.add("change");
      themeIconM.classList.add("change");
      themeIcon.src = sun;
      themeIconM.src = sun;
      bodyElm.style.background = "#fff";
      accMenu.classList.remove("dark");
      catNav.classList.remove("dark");
      catNavMob.classList.remove("dark");
      mobNavMenu.classList.remove("dark");
      footer.classList.remove("dark");
      upFullName.classList.remove("darkText");
      upUsername.classList.remove("darkText");
      upEditIcon.classList.remove("darkText");
      for (let i = 0; i < skillInfo.length; i++) {
        skillInfo[i].classList.remove("dark");
      }
      break;
  }
};
window.onload = initTheme();

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  window.localStorage.setItem("colorMode", "light");
  container.classList.remove("shadow-dark");
  containerM.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    containerM.classList.add("shadow-light");
    themeIcon.classList.remove("change");
    themeIconM.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIconM.classList.add("change");
  themeIcon.src = sun;
  themeIconM.src = sun;
  bodyElm.style.background = "#fff";
  accMenu.classList.remove("dark");
  catNav.classList.remove("dark");
  catNavMob.classList.remove("dark");
  mobNavMenu.classList.remove("dark");
  footer.classList.remove("dark");
  upFullName.classList.remove("darkText");
  upUsername.classList.remove("darkText");
  upEditIcon.classList.remove("darkText");
  for (let i = 0; i < skillInfo.length; i++) {
    skillInfo[i].classList.remove("dark");
  }
}
function setDark() {
  window.localStorage.setItem("colorMode", "dark");
  container.classList.remove("shadow-light");
  containerM.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    containerM.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
    themeIconM.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIconM.classList.add("change");
  themeIcon.src = moon;
  themeIconM.src = moon;
  bodyElm.style.background = "var(--darkBG)";
  accMenu.classList.add("dark");
  catNav.classList.add("dark");
  catNavMob.classList.add("dark");
  mobNavMenu.classList.add("dark");
  footer.classList.add("dark");
  upFullName.classList.add("darkText");
  upUsername.classList.add("darkText");
  upEditIcon.classList.add("darkText");
  for (let i = 0; i < skillInfo.length; i++) {
    skillInfo[i].classList.add("dark");
  }
}
