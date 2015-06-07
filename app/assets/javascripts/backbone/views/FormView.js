var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.FormView = Backbone.View.extend({
  initialize: function(){
    console.log("FormView initialized");
    // this.listenTo( $("button#get-started"), "click", this.render);
  },

  events: {
    'click #get-started': 'render',
    'click #ing-search': 'search',
    'click #random-search': 'random'
  },

  el: $("#container"),

  render: function(){
    console.log("render function hit");
    $("#welcome-box").addClass("animated bounceOutLeft");
    var template = $("#search-form").text();
    setTimeout(function(){
      $("#container").empty().append(template);
    }, 350);
  },

  search: function(){
    // stops the form from refreshing the page
    event.preventDefault();
    var firstIng = $("#ing1").val();
    var secondIng = $("#ing2").val();
    var thirdIng = $("#ing3").val();
    console.log(firstIng + " " + secondIng + " " + thirdIng);
    $.ajax({
      url: '/food',
      type: 'GET',
      dataType: 'json',
      // sends the search terms to the rails home#f2fcall method, which triggers the ajax call to the food2fork api
      data: {'search': firstIng + "," + secondIng + "," + thirdIng}
    }).done(function(data){
      var parsed = JSON.parse(data);
      console.log(parsed.recipes);
      // _.each(parsed, function(e){
      //   var 
      // })
    });
  },

  random: function(){

  }

});