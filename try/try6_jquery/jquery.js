$(document).ready(function() {
  $(".block1").html("更新公告!");

  $(".block2").css("background-color", "#e37875");
  $(".block2").css("border-radius", "50%");

  $(".block3-1").addClass("box");
  $(".block3-2").removeClass("box");

  $(".block4").html(
    "<div class='block';>增加內容</div><div class='block';>增加內容</div>"
  );
  $(".block4").prepend("<p>在前面加東西</p>");
  $(".block4").append("在後面加東西");

  $(".block5").text("<div class='block';>增加內容</div>");
});

$(document).ready(function() {
  $(".btn").click(function() {
    $(".btn").addClass("btn_click");
  });

  $(".btn2").click(function() {
    $(".choose_btn").text("已經點選：" + $(this).text());

    var cata = $(this).attr("data-cata");
    $(".btn_detail").text(cata);

    if (cata == "one") {
      $(".btn_detail").append("，你選到按鈕一！");
    } else {
      $(".btn_detail").append("，你選的不是按鈕一");
    }
  });

  $(".hover_btn").mouseenter(function() {
    $(this).text("滑鼠滑進來了");
  });
  $(".hover_btn").mouseleave(function() {
    $(this).text("滑鼠離開ㄌ");
  });

  setTimeout(function() {
    $(".time_btn").css("background-color", "#281f4b");
    $(".time_btn").css("color", "#fff");
    $(".time_btn").css("margin-left", "20px");
  }, 5000);

  var sec = 1;
  setInterval(function() {
    $(".count_btn").text("經過ㄌ " + sec + " 秒");
    sec = sec + 1;
  }, 1000);
});
