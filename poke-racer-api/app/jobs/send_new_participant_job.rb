class SendNewParticipantJob < ActiveJob::Base
 queue_as :default

 def perform(account_race)
   ActionCable.server.broadcast 'newparticipant',
   user: account_race.account,
   pokemon: account_race.account.pokemon,
   race_id: account_race.race.id

 end
end
