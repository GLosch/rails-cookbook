var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.RecipeView = Backbone.View.extend({
  initialize: function(){
    console.log("recipe view initialized");
    console.log(this.model + " is the model when initialized")
  },

  events: {
    'click button[data-action="save-recipe-button"]': 'saveModel',
  },

  saveModel: function(){
    console.log("RecipeView saveModel function triggered!");
    console.log(this.model);
    this.model.save();
  },

  // el: $("#container"),

  template: $("#search-results").text(),

  render: function(){
    // console.log("RecipeView render triggered");
    //var template = this.template
    var template = $("#search-results").text();
    var recipeCard = Mustache.render(template, {recipeCardBlock: this.model.attributes});
    //this.$el.html(recipeCard);
    //$("#container").append(this.el);
    this.$el.append(recipeCard);
  }


});