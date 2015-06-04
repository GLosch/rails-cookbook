console.log("scratch linked");

function getRecipeJson() {
  // var kw = search;
  var url = "http://food2fork.com/api/search?key=089c1ff7f1ed08d8c9b2f763dd260fe4&q=chicken,lemon";
  $.ajax({
    type: "GET",
    dataType: 'jsonp',
    url: url
  }).done(function (data) {
    console.log(data);
  });
}