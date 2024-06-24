function showIcons() {
  var iconContainerLeft = document.getElementById("iconContainerLeft");
  var iconContainerRight = document.getElementById("iconContainerRight");
  var avatar = document.querySelector(".avatar");

  if (iconContainerLeft.style.display === "block" && iconContainerRight.style.display === "block") {
      iconContainerLeft.style.display = "none";
      iconContainerRight.style.display = "none";
      avatar.classList.remove("no-blink");
  } else {
      iconContainerLeft.style.display = "block";
      iconContainerRight.style.display = "block";
      avatar.classList.add("no-blink");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var click = document.getElementById("click");
  var here = document.getElementById("here");
  var avatar = document.querySelector(".avatar");
  var visible = true;

  setInterval(function () {
      if (!avatar.classList.contains("no-blink")) {
          if (visible) {
              click.style.visibility = "hidden";
              here.style.visibility = "visible";
          } else {
              click.style.visibility = "visible";
              here.style.visibility = "hidden";
          }
          visible = !visible;
      }
  }, 1000);
});
