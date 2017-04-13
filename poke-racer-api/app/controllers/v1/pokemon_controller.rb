class V1::PokemonController < ApplicationController
  def index
    pokemon = Pokemon.all
    # loop do
      
      # sleep(1000)
    # end
    render json: pokemon, each_serializer: PokemonSerializer
  end
end
