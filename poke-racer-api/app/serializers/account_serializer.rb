class AccountSerializer < ActiveModel::Serializer
  attributes :id, :username
  belongs_to :pokemon, serializer: PokemonSerializer
end
