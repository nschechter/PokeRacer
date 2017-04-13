class AccountRace < ApplicationRecord
  after_create_commit { SendNewParticipantJob.perform_later self }
  belongs_to :account
  belongs_to :race
end
