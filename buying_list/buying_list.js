//新增清單物件
var shoplist = {};
shoplist.name = "My Buying List 花錢清單";
shoplist.time = "2018/07/24";
//清單裡的陣列物件
shoplist.list = [
  { name: "吹風機", price: 500 },
  { name: "洗髮精", price: 700 },
  { name: "水壺", price: 500 }
];

//定義元素用的 html 模板，
var item_html =
  "<li id='{{id}}' class='li_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div class='delete' id={{del_id}} data-delid={{del_item_id}}>X</div></li>";
var total_html =
  "<li class='total'>總花費額<div class='price'>{{price}}</div></li>";

// 產生showlist清單
function showlist() {
  $("#item_list").html(""); //先讓每次執行 showlist 都先清空
  var total_price = 0;
  for (var i = 0; i < shoplist.list.length; i++) {
    var item = shoplist.list[i]; //抓出 list 的第 i 項
    var item_id = "buyitem_" + i;
    var del_item_id = "del_buyitem_" + i;
    total_price += parseInt(item.price); //表示 total_price = total_price + item.price

    //宣告現在的 html: current_item_html 取代模板位置資料 replace(要取代的, 取代成...)
    var current_item_html = item_html
      .replace("{{num}}", i + 1)
      .replace("{{item}}", item.name)
      .replace("{{id}}", "buyitem_" + i)
      .replace("{{price}}", item.price)
      .replace("{{del_id}}", del_item_id)
      .replace("{{del_item_id}}", i);

    //在 #item_list 裡面產生替代後的 item_html 資料
    $("#item_list").append(current_item_html);

    //在加入 item_list 後才能寫 X 刪除項目的語法，因為要先加入項目，才能刪除東西
    //用每個項目產生的各自的 id 來抓要刪除的東西
    $("#" + del_item_id).click(function() {
      remove_item(parseInt($(this).attr("data-delid")));
    });
  }
  //同 item_html 道理，total_html 也做一樣動作
  var current_total_html = total_html.replace("{{price}}", total_price);
  $("#item_list").append(current_total_html);
}
//執行 function showlist 才會顯示
showlist();

//點擊新增按鈕，新增項目
$(".addbtn").click(function() {
  //建立 push 進去的項目
  shoplist.list.push({
    name: $("#input_name").val(),
    price: $("#input_price").val()
  });
  //push 完後，讓輸入框變為空
  $("#input_name").val("");
  $("#input_price").val("");
  showlist(); //點擊一次新增就產生一次 showlist
});

//按 X 刪除項目
function remove_item(id) {
  shoplist.list.splice(id, 1); //刪除項目：陣列.splice(位置,長度)
  showlist(); //刪除後再重新產生一次 showlist
}
//remove_item(2);
