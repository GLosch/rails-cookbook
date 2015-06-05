var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.FormView = Backbone.View.extend({
  initialize: function(){
    console.log("FormView initialized");
    this.listenTo( $("button#get-started"), "click", this.render);
  },

  events: {
    'click #get-started': 'render'
  },

  template: $("#search-form").text(),

  el: $("#container"),

  render: function(){
    console.log("render function hit");
    this.$el.empty();
    this.$el.append(template);
  }
});