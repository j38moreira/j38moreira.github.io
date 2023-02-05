function showIcons() {
    var iconContainer = document.getElementById("iconContainer");
    if (iconContainer.style.display === "block") {
      iconContainer.style.display = "none";
    } else {
      iconContainer.style.display = "block";
    }
}

var click = document.getElementById("click");
var here = document.getElementById("here");
var visible = true;

setInterval(function () {
  if (visible) {
    click.style.visibility = "hidden";
    here.style.visibility = "visible";
  } else {
    click.style.visibility = "visible";
    here.style.visibility = "hidden";
  }
  visible = !visible;
}, 1000);
  