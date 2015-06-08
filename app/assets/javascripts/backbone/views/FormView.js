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
      // this.$el.empty() ?
      $("#container").empty();
      var parsed = JSON.parse(data);
      if (!parsed.recipes) {
        console.log("Your search yielded no results. Try something else");
      } else {
        var imageWidthArray = [];
        var imageHeightArray = [];
        parsed.recipes.forEach(function(recipe){
          if (_.contains(recipe.title, "&amp;")){
            recipe.title = recipe.title.replace("&amp;", "&#38;");
          }
          // imageWidthArray.push($(recipe).image_url.width());
          // imageHeightArray.push($(recipe).image_url.height());
          var newRecipeModel = new Cookbook.Models.Recipe({
            f2f_url: recipe.f2f_url,
            title: recipe.title,
            recipe_id: recipe.recipe_id,
            image_url: recipe.image_url,
            social_rank: recipe.social_rank,
            recipe_id: recipe.recipe_id
          });
          var newRecipeView = new Cookbook.Views.RecipeView({model: newRecipeModel});
          newRecipeView.render();
          // debugger;
        });
      }

      // _.each(parsed, function(e){
      //   var 
      // })
    });
  },

  random: function(){

  }

});