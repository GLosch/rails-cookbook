var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.FormView = Backbone.View.extend({
  initialize: function(){
    console.log("FormView initialized");
  },

  events: {
    'click #get-started': 'addForm'
  },

  template: $("#search-form").text(),

  el: $("#container"),

  addForm: function(){
    console.log("render function hit");
    this.$el.empty();
    this.$el.append(template);
  }
});