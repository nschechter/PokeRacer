class PokemonChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'pokemon'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
