let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  nav: false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1400: {
      items: 2,
      gutter: 20,
    },
    1024: {
      items: 2,
      gutter: 20,
    },
    768: {
      items: 1,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

function hideShow() {
  if (document.getElementById("div2").style.display) {
    document.getElementById("div2").style.display = "";
  } else document.getElementById("div2").style.display = "none";
}
