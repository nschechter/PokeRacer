require 'HTTParty'

namespace :pokemon do
  desc "Fetches Pokemon Data from PokeAPI"
  task :fetch => :environment do
  	POKEMON_API_COUNT = 10090
  	i = 1

  	puts "Starting..."
  	while i < POKEMON_API_COUNT do
  		puts "Getting pokemon @ position: #{i}"
	  	response = HTTParty.get(
	  			   "http://pokeapi.co/api/v2/pokemon/#{i}/",
	    		   {format: :json})

	  	createPokemonFromInfo(response)

	   	#account for weirdo jump on pokeapi
	   	if i == 721
	   		i = 10001
	   	else
	   		i = i + 1
	   	end
    end
  end

  # Idk about this one tbh
  desc "Delete all data"
  task :delete => :environment do
  	puts "Deleting all pokemon..."
  	Account.destroy_all
  	Pokemon.destroy_all
  	puts "Deleted all pokemon."
  end
end

def createPokemonFromInfo(response)
    name = response["forms"][0]["name"]
    speed = response["stats"][0]["base_stat"]
    weight = response["weight"]
    height = response["height"]
    img_url = response["sprites"]["front_default"]
    
    Pokemon.create!(name: name, speed: speed, weight: weight, height: height, img_url: img_url)
    puts "Created #{name}"
end