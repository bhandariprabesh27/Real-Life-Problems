//Custom Tooltip
document.querySelector("#btn").addEventListener("mouseenter", function () {
  document.querySelector(".tooltip").style.display = "initial";
});
document.querySelector("#btn").addEventListener("mouseleave", function () {
  document.querySelector(".tooltip").style.display = "none";
});