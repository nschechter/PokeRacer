class AddWeightAndHeightAndSpeedToPokemons < ActiveRecord::Migration[5.0]
  def change

    add_column :pokemons, :weight, :integer
    add_column :pokemons, :height, :integer
    add_column :pokemons, :speed, :integer
  end
end
