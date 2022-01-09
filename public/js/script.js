document.getElementById("selectMini").addEventListener("click", function () {
  var select = document.getElementById("restaurang");
  var items = select.getElementsByTagName("option");
  var index = Math.floor(Math.random() * items.length);
  select.selectedIndex = index;
});

function showSelect() {
  var x = document.getElementById("selectForm");
  var vText = document.getElementsByClassName("changeRest");
  if (x.style.display === "block") {
    x.style.display = "none";
    vText[0].innerHTML =
      "<a href='#' onclick='showSelect();'>Visa restaurang</a>";
  } else {
    x.style.display = "block";
    vText[0].innerHTML =
      "<a href='#' onclick='showSelect();'>Dölj restaurang</a>";
  }
}
