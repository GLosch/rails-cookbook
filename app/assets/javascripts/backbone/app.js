var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

// var eventCollection;

Cookbook.initialize = function(){
  
};

$(function(){
  var Router = Backbone.Router.extend({

    initialize: function(){
      $('#container').empty();
      Cookbook.initialize();
    },

    routes: {
      '': 'index',
      'search': 'search',
      'recipes': 'recipes'
    },

    index: function(){

    },

    search: function(){
      console.log("hit search route");
      $("#container").empty();

      var formView = new Cookbook.Views.FormView({
        el: $("#search-form")
      });
      formView.render();
    },

    // profile: function(){
    //   console.log('in profile route');
    //   $("#main-content").empty();

    //   var userEditView = new Impromp2App.Views.UserEditView({
    //     model: Impromp2App.currentUser,
    //     el: $('#main-content')
    //   });
    //   userEditView.render();
    // }

    recipes: function(){

    }

  });

  Cookbook.currentUser = new Cookbook.Models.User();
  var promise = Cookbook.currentUser.fetch();
  
  promise.done(function(){
    var myRouter = new Router();
    Backbone.history.start();
  });

});
