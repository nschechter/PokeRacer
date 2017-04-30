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
				result["race"] = {}
				result["race"]["10"] = rand(0..100)
				result["race"]["20"] = rand(result['race']['10']..200)
				result["race"]["30"] = rand(result['race']['20']..300)
				result["race"]["40"] = rand(result['race']['30']..400)
				result["race"]["50"] = rand(result['race']['40']..500)
				result["race"]["60"] = rand(result['race']['50']..600)
				result["race"]["70"] = rand(result['race']['60']..1100)
				result["race"]["80"] = rand(result['race']['70']..1100)
				result["race"]["90"] = rand(result['race']['80']..1100)
				result["race"]["100"] = 1000
			else
				result["race"] = {}
				result["image"] = participant.pokemon.img_url
				result["race"]["10"] = rand(0..100)
				result["race"]["20"] = rand(result['race']['10']..200)
				result["race"]["30"] = rand(result['race']['20']..300)
				result["race"]["40"] = rand(result['race']['30']..400)
				result["race"]["50"] = rand(result['race']['40']..500)
				result["race"]["60"] = rand(result['race']['50']..600)
				result["race"]["70"] = rand(result['race']['60']..700)
				result["race"]["80"] = rand(result['race']['70']..800)
				result["race"]["90"] = rand(result['race']['80']..900)
				result["race"]["100"] = 1000
			end
			result
		end
		results
	end
end