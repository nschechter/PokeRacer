class V1::PokemonController < ApplicationController
  def index
    pokemon = Pokemon.all
      ActionCable.server.broadcast 'pokemon',
      user: Account.find(1).username,
      pokemon: Pokemon.find(1).name
    render json: pokemon, each_serializer: PokemonSerializer
  end
end
