var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.RecipeView = Backbone.View.extend({
  initialize: function(){
    console.log("recipe view initialized");
    console.log(this.model + " is the model when initialized");
  },

  events: {
    'click button[data-action="save-recipe-button"]': 'saveModel',
  },

  saveModel: function(){
    console.log("RecipeView saveModel function triggered!");
    var newRecipeModel = new Cookbook.Models.Recipe({
      f2f_url: "http://www.google.com",
      title: "Julia's potatoes",
      recipe_id: 349872034,
      image_url: "http://www.google.com",
      social_rank: 100,
      user_id: 1
    });
    newRecipeModel.save();
  },

  el: $("#container"),

  template: $("#search-results").text(),

  render: function(){
    // console.log("RecipeView render triggered");
    var template = $("#search-results").text();
    var recipeCard = Mustache.render(template, {recipeCardBlock: this.model.attributes});
    this.$el.append(recipeCard);
  }


});