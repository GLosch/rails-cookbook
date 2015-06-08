var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.RecipeView = Backbone.View.extend({
  initialize: function(){
    console.log("recipe view initialized");
    // debugger;
    this.listenTo(Cookbook.Views.FormView, "change", this.render);
  },

  template: $("#search-results").text(),

  render: function(){
    console.log("RecipeView render triggered");
    var self = this;
    var recipeValues = {image_url: "url", title: "title", f2f_url: "f2f_url"};
    var recipeCard = Mustache.render(self.template, {recipeCard: recipeValues});
    $("#container").empty();
    $("#container").append(recipeCard);
  }


});