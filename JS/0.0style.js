var x = document.querySelectorAll(".btn");
function dark() {
  document.body.style.backgroundColor = "black";
  x.forEach((e) => {
    e.style.color = "black";
  });
  document.getElementById("off").style.color = "black";
}
function light() {
  document.body.style.backgroundColor = "white";

  x.forEach((e) => {
    e.style.color = "white";
  });
  document.getElementById("off").style.color = "white";
}
function ref() {
  document.getElementById("myref").style.display = "list-item";
  document.getElementById("picref").style.display = "none";
}
function picref() {
  document.getElementById("picref").style.display = "list-item";
  document.getElementById("myref").style.display = "none";
}
