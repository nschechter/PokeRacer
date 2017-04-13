module ApplicationCable
  class Channel < ActionCable::Channel::Base
  	#RaceChannel.broadcast_to(@race)
	def subscribed
		pokemon = Pokemon.find(1)
    	stream_for pokemon
  	end
  end
end
