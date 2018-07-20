$(document).ready(function() {
  var number = 12;

  $(".minus").click(function() {
    number = number - 1;
    $(".number").text(number);
    check_number();
  });
  $(".add").click(function() {
    number = number + 1;
    $(".number").text(number);
    check_number();
  });

  function check_number() {
    if (number < 10) {
      $(".info").text("數量即將用盡");
      $(".info").css("color", "#22d389");
      $(".info").css("border-color", "#22d389");
      $(".call").addClass("call_open");
    } else if (number < 15) {
      $(".info").text("數量尚足夠");
      $(".info").css("color", "#fff");
      $(".info").css("border-color", "#fff");
      $(".call").removeClass("call_open");
    } else {
      $(".info").text("數量還很多");
      $(".info").css("color", "#2dfefd");
      $(".info").css("border-color", "#2dfefd");
    }
  }

  now = 0;
  $(".call").click(function() {
    $(".call").text("☎ 電話撥打中");
    setInterval(function() {
      now = now + 1;
      $(".call").text("☎ 電話撥打中... " + now);
    }, 1000);
  });
});
