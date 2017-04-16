class RemoveParticipantJob < ActiveJob::Base
 queue_as :default

 def perform(id)
   ActionCable.server.broadcast 'removeparticipant',
   participant_id: id, race_id: id
 end
end
