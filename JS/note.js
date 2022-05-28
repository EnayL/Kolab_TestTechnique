const div1 = document.getElementById("div1");

document.getElementById("switch").addEventListener("click", function () {
  // hide element: element.hidden = true;
  // show element: element.hidden = false;
  div1.hidden = !div1.hidden;
});
