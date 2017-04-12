class CreateRaces < ActiveRecord::Migration[5.0]
  def change
    create_table :races do |t|
      t.text :results
      t.integer :creator_id

      t.timestamps
    end
  end
end
