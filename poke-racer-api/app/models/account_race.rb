class AccountRace < ApplicationRecord
  after_create_commit { SendNewParticipantJob.perform_later self }
  after_destroy { RemoveParticipantJob.perform_later self.account.id}
  belongs_to :account
  belongs_to :race
end
