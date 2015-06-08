var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

// var recipeCollection;

Cookbook.initialize = function(){
  var formView = new Cookbook.Views.FormView({
    el: $("#container")
  });

  var recipeView = new Cookbook.Views.RecipeView({
    model: Cookbook.Models.recipe,
    el: $("#container")
  });
};

$(function(){
  var Router = Backbone.Router.extend({

    initialize: function(){
      // $('#container').empty();
      Cookbook.initialize();
    },

    // routes: {
    //   '': 'index',
    //   'search': 'search',
    //   'recipes': 'recipes'
    // },

    // index: function(){

    // },

    // search: function(){
    //   console.log("hit search route");
    //   $("#container").empty();

      
    // },

    // recipes: function(){

    // }

  });

  Cookbook.currentUser = new Cookbook.Models.User();
  // var promise = 
  Cookbook.currentUser.fetch();
  
  // promise.done(function(){
    var myRouter = new Router();
    Backbone.history.start();
  // });

  // Impromp2App.currentUser = new Impromp2App.Models.User();
  // var promise = Impromp2App.currentUser.fetch();
  
  // promise.done(function(){
  //   var myRouter = new Router();
  //   Backbone.history.start();
  // });

});
