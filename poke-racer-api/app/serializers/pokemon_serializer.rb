class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url
end
