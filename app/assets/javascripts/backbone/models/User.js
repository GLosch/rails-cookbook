var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Models.User = Backbone.Model.extend({
  initialize: function(){
    // console.log("new user");
  },

  urlRoot: "/user"

});

