var typed = new Typed('.auto-type', {
  strings: ["Analysis", "Prediction"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

var icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "/images/moon-solid.svg"
  }
  else {
    icon.src = "/images/sun-solid.svg"
  }
}


