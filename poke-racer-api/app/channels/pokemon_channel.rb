class PokemonChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'pokemon'
  end

  def unsubscribed
  end
end
