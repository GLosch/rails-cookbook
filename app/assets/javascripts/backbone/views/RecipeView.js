var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.RecipeView = Backbone.View.extend({
  initialize: function(){
    console.log("recipe view initialized");
  },

  events: {
    'click button[data-action="save-recipe-button"]': 'saveModel',
  },

  saveModel: function(){
    console.log("RecipeView saveModel function triggered!");
    debugger;
    this.model.save();
  },

  template: $("#search-results").text(),

  render: function(){
    // console.log("RecipeView render triggered");
    var template = $("#search-results").text();
    var recipeCard = Mustache.render(template, {recipeCardBlock: this.model.attributes});
    $("#container").append(recipeCard);
  }


});