class CreateAccountRaces < ActiveRecord::Migration[5.0]
  def change
    create_table :account_races do |t|
      t.references :account, foreign_key: true
      t.references :race, foreign_key: true
      t.integer :final_position

      t.timestamps
    end
  end
end
