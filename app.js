$(function() {
  $(".video-player").click(function() {
    $(".modal").addClass("open");
  });

  $(".modal").click(function() {
    $(".modal").removeClass("open");
  });
});

/*$(".video-player").click(function() {
  $(".modal").addClass("open");





$(".video-player").click(function() {
  $(".modal").addClass("open");
});


$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $("#overlay .overlay-menu ul li a").click(function() {
    $("#toggle").removeClass("active");
    $("#overlay").removeClass("open");
  });
});*/
