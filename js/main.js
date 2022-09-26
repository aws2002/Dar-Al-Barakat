$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    navigation: true,
    autoPlay: 3000,
    navText: ["Prev", "Next"],
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });
  $(".owl-carousel-2").owlCarousel({
    items: 1,
    // navigation: true,
    autoPlay: 3500,
    navText: ["Prev", "Next"],
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    margin: 20,
  });
});
