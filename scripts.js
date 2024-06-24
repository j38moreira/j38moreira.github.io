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

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');
    button.addEventListener('click', function() {
        var url = 'https://ispgaya-my.sharepoint.com/personal/ispg2019101037_ispgaya_pt/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fispg2019101037%5Fispgaya%5Fpt%2FDocuments%2Frelatorio%5Festagio%5Fjoaomoreira%2Epdf&parent=%2Fpersonal%2Fispg2019101037%5Fispgaya%5Fpt%2FDocuments&ga=1';
        window.open(url, '_blank');
    });
});