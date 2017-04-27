# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Account.create!(name: "Dylan", password_digest: "test")
# Account.create!(name: "Noah", password_digest: "test")
Account.destroy_all
Pokemon.destroy_all
account = Account.new(username: "Ian", password_digest: "test")
account.save

