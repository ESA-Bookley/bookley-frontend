// let mobMenIcn = document.getElementById("MobileMenuIcon");
// let mobNavMenu = document.getElementById("mobNavMenu");

// let mobMenuToggle = () => {
//   console.log("kabas");
//   mobNavMenu.style.display === "none"
//     ? (mobNavMenu.style.display = "flex")
//     : (mobNavMenu.style.display = "none");
// };

// mobMenIcn.addEventListener("click", mobMenuToggle);

/* Open when someone clicks on the span element */
function openNavMob() {
  document.getElementById("catNavMob").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavMob() {
  document.getElementById("catNavMob").style.height = "0%";
}

$(document).ready(function () {
  $("#mobNavMenu").hide();
  $("#MobileMenuIcon").click(function (e) {
    e.preventDefault();
    $("#mobNavMenu").slideDown(1000);
  });
  $("#MobileMenuIconX").click(function (e) {
    $("#mobNavMenu").slideUp(500);
  });
});
