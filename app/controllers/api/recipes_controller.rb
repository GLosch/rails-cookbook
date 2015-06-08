module Api
  class RecipesController < ApplicationController
    def index
      recipes = Recipe.all
      render json: recipes
    end

    def create
      recipe = Recipe.create(recipe_params)
      render json: recipe
    end

    private

      def recipe_params
        params.require(:recipe).permit(:user_id, :f2f_url, :title, :recipe_id, :image_url, :social_rank)
      end
  end
end