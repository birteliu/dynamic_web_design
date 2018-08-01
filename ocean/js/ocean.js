//向下捲動
if (
  $(window).scroll(function(e) {
    if ($(window).scrollTop() <= 0) {
      $(".explore").addClass("opacity1");
      $("nav").css("background-color", "transparent");
      $("nav").css("color", "#fff");
      $("nav a").css("color", "#fff");
    } else {
      $(".explore").removeClass("opacity1");
      $("nav").css("background-color", "#fff");
      $("nav").css("color", "#00c3d7");
      $("nav a").css("color", "#00c3d7");
    }
  })
);

//緩慢滑動
$(document).on("click", "a", function(event) {
  event.preventDefault(); //preventDefault 取消事件
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

//mousemove
$(window).mousemove(function(evt) {
  var x = evt.pageX;
  var y = evt.pageY;
  //console.log(x);

  //$("#cross").css("left", x + "px");
  //$("#cross").css("top", y + "px");
});
