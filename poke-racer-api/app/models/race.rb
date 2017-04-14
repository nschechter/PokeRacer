class Race < ApplicationRecord
	has_many :account_races
	has_many :accounts, through: :account_races
end