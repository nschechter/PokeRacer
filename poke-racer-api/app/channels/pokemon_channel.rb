class PokemonChannel < ApplicationCable::Channel
  def subscribed

    stream_from 'pokemon'
    ActionCable.server.broadcast 'pokemon',
    user: Account.find(1).username,
    pokemon: Pokemon.find(1).name
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
