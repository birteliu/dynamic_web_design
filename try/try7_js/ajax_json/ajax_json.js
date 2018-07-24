var item_tempelete =
  "<li class='{{class}}'>{{num}}. {{name}} ( {{date}} )</li>";

var data_url =
  "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";

var dotodata;

$.ajax({
  url: data_url,
  success: function(respond) {
    tododata = JSON.parse(respond);
    //console.log(JSON.parse(respond));
    // $("#listitem").html(respond);
    for (i = 0; i < tododata.length; i++) {
      var item = tododata[i];
      var now_class = "";
      if (item.done == true) {
        now_class = "done";
      } //if(item.done==true){now_class="done";} 同等於(item.done==true)?"done":"";

      var now_item = item_tempelete
        .replace("{{name}}", item.name)
        .replace("{{num}}", i + 1)
        .replace("{{date}}", item.date)
        .replace("{{class}}", now_class);
      $("#listitem").append(now_item);
    }
  }
});
