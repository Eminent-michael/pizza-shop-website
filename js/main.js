const parallax = document.getElementById("image1");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

const parallax2 = document.getElementById("image2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax2.style.backgroundPositionY = offset * 0.7 + "px";
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

document.querySelector(".send-msg").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
