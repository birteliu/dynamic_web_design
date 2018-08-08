var alldata = ["pen", "pinapple", "apple", "pen"];
var vm = new Vue({
  el: "#app",
  data: {
    fruits: alldata,
    status: ""
  },
  methods: {
    remove: function(id, fname) {
      this.fruits.splice(id, 1);
      this.status = "第 " + (id + 1) + " 項 " + fname + " 已經被移除了.";
    },
    add: function(data) {
      this.fruits.push(data);
      this.status = "加入了" + data + ".";
    }
  },
  //計算屬性
  computed: {
    totals: function() {
      var total = {
        pen: 0,
        pinapple: 0,
        apple: 0
      };
      for (var i = 0; i < alldata.length; i += 1) {
        total[this.fruits[i]] += 1;
      }
      return total;
    }
  }
});
