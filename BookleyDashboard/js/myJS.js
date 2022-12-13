let myCollapseJs = (toElm) => {
  console.log("wosel");
  let elm = document.getElementById(toElm);
  if (elm.style.display === "none") {
    elm.style.display = "block";
  } else {
    elm.style.display = "none";
  }
};
