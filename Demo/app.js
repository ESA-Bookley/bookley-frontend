function openNavMob() {
  document.getElementById("catNavMob").style.height = "100%";
}
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

//
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("catNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("catNav").style.height = "0%";
}
