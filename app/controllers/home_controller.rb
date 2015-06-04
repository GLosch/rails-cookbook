class HomeController < ApplicationController
  def index
    # render json: "hi ohmygoditworked"
  end

  def f2fcall
    request = HTTParty.get("https://food2fork.com/api/search?key=089c1ff7f1ed08d8c9b2f763dd260fe4")
    render json: request
  end
end