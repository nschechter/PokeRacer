class Race < ApplicationRecord
	has_many :account_races
	has_many :accounts, through: :account_races
	has_many :pokemon, through: :accounts

	def gen_race
		# image, 
		# {
		# 	percentage: x coord, 20: 220, 30: 300, 40: 400,
		# 	50: 800, 60: 820, 70: 1000, 80: 1000, 90: 1000, 100: 1000
		# }, yCoord)
		participants = self.accounts
		winning_index = rand(participants.length)
		winner = participants[winning_index]
		puts winning_index
		results = participants.map do |participant|
			result = {}
			if participant == winner
				result["image"] = participant.pokemon.img_url
				result["10"] = rand(0..100)
				result["20"] = rand(result['10']..200)
				result["30"] = rand(result['20']..300)
				result["40"] = rand(result['30']..400)
				result["50"] = rand(result['40']..500)
				result["60"] = rand(result['50']..600)
				result["70"] = rand(result['60']..1100)
				result["80"] = rand(result['70']..1100)
				result["90"] = rand(result['80']..1100)
				result["100"] = 1000
			else
				result["image"] = participant.pokemon.img_url
				result["10"] = rand(0..100)
				result["20"] = rand(result['10']..200)
				result["30"] = rand(result['20']..300)
				result["40"] = rand(result['30']..400)
				result["50"] = rand(result['40']..500)
				result["60"] = rand(result['50']..600)
				result["70"] = rand(result['60']..700)
				result["80"] = rand(result['70']..800)
				result["90"] = rand(result['80']..900)
				result["100"] = 1000
			end
			result
		end
		results
	end
end