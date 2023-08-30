var typed = new Typed('.auto-type', {
  strings: ["Placement Analysis", "Placement Prediction"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

var icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src="/static/Images/moon-solid.svg"
  }
  else {
    icon.src = "/Images/sun-solid.svg"
  }
}


