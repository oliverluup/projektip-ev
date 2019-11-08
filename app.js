// Open & close video modal when clicked

$(function() {
  $(".video-player").click(function() {
    $(".modal").addClass("open");
  });

  $(".modal").click(function() {
    $(".modal").removeClass("open");
  });
});

// Change nav color when page starts scrolling

$(document).ready(function() {
  $(window).scroll(function() {
    // check if scroll event happened
    if ($(document).scrollTop() > 50) {
      // check if user scrolled more than 50 from top of the browser window
      $(".navbar").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });
});
