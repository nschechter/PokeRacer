class Race < ApplicationRecord
	has_many :account_races
	has_many :participants, as: :accounts, through: :account_races
end
