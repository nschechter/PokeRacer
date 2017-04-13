class RemoveParticipantJob < ActiveJob::Base
 queue_as :default

 def perform(id)
   ActionCable.server.broadcast 'removeparticipant',
   id
 end
end
