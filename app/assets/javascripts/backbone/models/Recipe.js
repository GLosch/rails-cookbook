var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Models.Recipe = Backbone.Model.extend({
  initialize: function(){
    console.log("new recipe model");
  },

  el: $("#search-results").text(),


});