class AddNewParticipantChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'newparticipant'
  end

  def unsubscribed
  end
end
