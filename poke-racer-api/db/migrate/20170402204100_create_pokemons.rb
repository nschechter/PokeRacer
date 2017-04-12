class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :img_url

      t.timestamps
    end
  end
end
