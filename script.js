function getData() {

  $.ajax({
    url: "getFromDatabase.php",
    method: "GET",
    success: function(data) {

      var prices = JSON.parse(data);

      var source   = document.getElementById("box-template").innerHTML;
      var template = Handlebars.compile(source);

      for (var i = 0; i < prices.length; i++) {

        var price = prices[i];
        var priceHTML = template(price);

        $(".box-container").append(priceHTML);
      }
    }
  })
}


function init() {

  getData();
}

$(init)
