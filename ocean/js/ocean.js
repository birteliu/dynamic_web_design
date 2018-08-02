//向下捲動
if (
  $(window).scroll(function(e) {
    if ($(window).scrollTop() <= 0) {
      $(".explore").addClass("opacity1");
      $("nav").css("background-color", "transparent");
      $("nav").css("color", "#fff");
      $("nav a").css("color", "#fff");
      $("nav button").css("background-color", "#fff");
      $("nav button").toggleClass("white-color");
    } else {
      $(".explore").removeClass("opacity1");
      $("nav").css("background-color", "#fff");
      $("nav").css("color", "#00c3d7");
      $("nav a").css("color", "#00c3d7");
      $("nav button").css("background-color", "#00c3d7");
      $("nav button").toggleClass("ocean-color");
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
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  //console.log(x);

  //計算相對區域的位置，#island 這塊 section 相對於左上角的位置
  var x = pagex - $("section#island").offset().left;
  var y = pagey - $("section#island").offset().top;
  //console.log(x + "," + y);

  //雲朵左右移動
  //除 -20 代表滑鼠左右移動時，滑鼠往右 20 他就往左 -1
  $(".margin-bottom").css("transform", "translateX(" + x / -20 + "px)");

  //#island 文字與海浪的移動
  //當滑鼠上下移動時，文字會左右移動，三種除以不同數值，移動的距離就不一樣
  $("#island h3").css("transform", "translateX(" + y / -5 + "px)");
  $("#island h5").css("transform", "translateX(" + y / -10 + "px)");
  $("#island h4").css("transform", "translateX(" + y / -20 + "px)");

  $("#island .wave1").css("transform", "translateX(" + x / -5 + "px)");
  $("#island .wave2").css("transform", "translateX(" + x / -10 + "px)");
  $("#island .wave3").css("transform", "translateX(" + x / -15 + "px)");
  $("#island .wave4").css("transform", "translateX(" + x / -20 + "px)");

  $("#island .sailboat").css("transform", "translateX(" + x / -30 + "px)");

  //tree
  var treeplace = $("#tree_1").offset().left + $("#tree_1").width() / 2;
  if (Math.abs(x - treeplace) < 80) {
    $("#tree_1").css("bottom", "0px");
  } else {
    $("#tree_1").css("bottom", "-30px");
  }

  var treeplace = $("#tree_2").offset().left + $("#tree_2").width() / 2;
  if (Math.abs(x - treeplace) < 80) {
    $("#tree_2").css("bottom", "0px");
  } else {
    $("#tree_2").css("bottom", "-20px");
  }

  var treeplace = $("#tree_3").offset().left + $("#tree_3").width() / 2;
  if (Math.abs(x - treeplace) < 80) {
    $("#tree_3").css("bottom", "0px");
  } else {
    $("#tree_3").css("bottom", "-40px");
  }
});
