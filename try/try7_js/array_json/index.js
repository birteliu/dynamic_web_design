$(document).ready(function() {
  var menu = []; //陣列像是一個清單，要告訴電腦幾號項目裡面有甚麼
  menu[0] = "回到未來";
  menu[1] = "魔鬼剋星";
  menu[2] = "怪奇物語";
  $("#menu").append("<li>" + menu[0] + "</li>");
  $("#menu").append("<li>" + menu[1] + "</li>");
  $("#menu").append("<li>" + menu[2] + "</li>");

  //另一種寫法
  var menu2 = [];
  menu2 = ["回到未來 2", "魔鬼剋星 2", "怪奇物語 2"];
  //使用push在後面再推入一筆資料
  menu2.push("ＥＴ外星人");
  // for(變數開始的值;要繼續重複的條件;每次執行完的改變)
  for (var i = 0; i < 4; i = i + 1) {
    $("#menu2").append("<li>" + i + ". " + menu2[i] + "</li>");
  }

  var store = {}; //用.來存取跟指定屬性的資料
  store.name = "DVD 出租站";
  store.address = "高雄市三民區";
  store.phone = "07-3981234";

  $("#store").append("<li>" + "商店名稱：" + store.name + "</li>");
  $("#store").append("<li>" + "商店地址：" + store.address + "</li>");
  $("#store").append("<li>" + "商店電話：" + store.phone + "</li>");

  //另一種寫法
  var store2 = {};
  store2 = {
    name2: "DVD 出租站 2", //名稱: "值",  //值可以是字串
    address2: "高雄市三民區 2",
    phone2: "07-391234 2",
    menu: ["回到未來", "魔鬼剋星", "怪奇物語"] //值可以是陣列
  };

  var store2_movie = "<ul>";
  for (var i = 0; i < store2.menu.length; i = i + 1) {
    store2_movie += "<li>" + i + ". " + store2.menu[i] + "</li>";
  }
  store2_movie += "</ul>";

  $("#store2").append("<li>" + "商店名稱：" + store2.name2 + "</li>");
  $("#store2").append("<li>" + "商店地址：" + store2.address2 + "</li>");
  $("#store2").append("<li>" + "商店電話：" + store2.phone2 + "</li>");
  $("#store2").append("<li>" + "電影項目：" + store2_movie + "</li>");
});
