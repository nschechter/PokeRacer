class V1::PokemonController < ApplicationController
  def index
    pokemon = Pokemon.all
    # loop do
      ActionCable.server.broadcast 'pokemon',
      user: Account.find(1).username,
      pokemon: Pokemon.find(1).name
      # sleep(1000)
    # end
    render json: pokemon, each_serializer: PokemonSerializer
  end
end
