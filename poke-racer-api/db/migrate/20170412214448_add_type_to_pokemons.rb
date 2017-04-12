class AddTypeToPokemons < ActiveRecord::Migration[5.0]
  def change
    add_column :pokemons, :type, :integer
  end
end
