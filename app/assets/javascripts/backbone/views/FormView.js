var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.FormView = Backbone.View.extend({
  initialize: function(){
    console.log("FormView initialized");
  },

  template: $("#search-form").text(),

  render: function(){
    
  }
});