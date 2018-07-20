$(document).ready(function() {
  var page = 0;
  $(".screen").click(function() {
    page = page + 1;
    if (page > 2) {
      page = 0;
    }
    $(".page").css("left", "-" + page * 100 + "%");
  });

  $(".xa1").click(function() {
    $(".phonename").text("Sony XA1");
    $(".phone").css("width", "");
    $(".screen").css("height", "");
    $(".phone").css("border-radius", "");
  });

  $(".m4").click(function() {
    $(".phonename").text("Sony M4");
    $(".phone").css("width", "250");
    $(".screen").css("height", "");
    $(".phone").css("border-radius", "10px");
  });

  $(".xcompact").click(function() {
    $(".phonename").text("Sony X Compact");
    $(".phone").css("width", "230");
    $(".screen").css("height", "320");
    $(".phone").css("border-radius", "");
  });

  $(".wiggle").click(function() {
    wiggletime = 0;
  });

  var wiggletime = 21;
  setInterval(function() {
    if (wiggletime <= 20) {
      wiggletime = wiggletime + 1;
      if (wiggletime % 2 == 0) {
        $(".phone").css("left", "30px");
      } else {
        $(".phone").css("left", "-30px");
      }
    }
    if (wiggletime == 21) {
      $(".phone").css("left", "");
    }
  }, 60);

  $(".turn360").click(function() {
    $(".phone").css("transform", "rotate(360deg)");
  });
});
