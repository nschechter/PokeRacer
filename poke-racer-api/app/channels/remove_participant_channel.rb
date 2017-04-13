class RemoveParticipantChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'removeparticipant'
  end

  def unsubscribed
  end
end
