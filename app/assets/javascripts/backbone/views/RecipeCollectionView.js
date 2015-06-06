var Cookbook = Cookbook || { Models: {}, Collection: {}, Views: {} };

Cookbook.Collections.RecipeCollection = Backbone.Collection.extend({
  initialize: function(options){
  
  },
  model: Cookbook.Models.Recipe,
  url: function(){
   return 'food';
  }
});