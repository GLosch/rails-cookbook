class HomeController < ApplicationController
  def index
  end

  def f2fcall
    request = HTTParty.get("http://food2fork.com/api/search?key=089c1ff7f1ed08d8c9b2f763dd260fe4")
    # binding.pry
    render json: request.to_json
  end
end