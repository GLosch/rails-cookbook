var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Views.FormView = Backbone.View.extend({
  initialize: function(){
    console.log("FormView initialized");
    this.listenTo( $("button#get-started"), "click", this.render);
  },

  events: {
    'click #get-started': 'render'
  },

  el: $("#container"),

  render: function(){
    console.log("render function hit");
    $("#welcome-box").addClass("animated bounceOutLeft");
    var template = $("#search-form").text();
    setTimeout(function(){ $("#container").empty().append(template); }, 350);
  }

});