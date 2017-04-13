class AddNewParticipantChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'newparticipant'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
