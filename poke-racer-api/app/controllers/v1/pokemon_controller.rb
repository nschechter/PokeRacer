class V1::PokemonController < ApplicationController
  def index
    pokemon = Pokemon.all
    render json: pokemon, each_serializer: PokemonSerializer
  end
end
