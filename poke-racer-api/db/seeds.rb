# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Account.create!(name: "Ian", password_digest: "test")
Account.create!(name: "Dylan", password_digest: "test")
Account.create!(name: "Noah", password_digest: "test")

Pokemon.create!(name: "Pikachu", img_url: "http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png")

account = Account.find_by(name: "Ian")
account.pokemon = Pokemon.find(1)
account.save