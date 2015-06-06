class UsersController < ApplicationController

  # Homepage route -> views/users/index.html.erb
  def index

  end

  # Makes the Cookbook.currentUser attribute available to Backbone, with the recipes that belong to the currently-logged-in user
  def show
    session_user = User.find(current_user.id).to_json(:include => :recipes)
    render json: session_user
    # render session_user
  end


  # def update
  #   update = JSON.parse(params["user "])
  #   current_user.first_name = update['first_name']
  #   current_user.last_name = update['last_name']
  #   current_user.image_url = update['image_url']
  #   current_user.zipcode = update['zipcode']
  #   current_user.email = update['email']

  #   current_user.save()
  #   render json: current_user
  # end

end