class Account < ApplicationRecord
	has_secure_password
	belongs_to :pokemon
	has_many :account_races
	has_many :races, through: :account_races

	def self.from_token(token)
		account_id = Auth.decode(token)[0]["account_id"]
		Account.find(account_id)
	end
end
