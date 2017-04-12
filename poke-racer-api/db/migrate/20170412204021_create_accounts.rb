class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :username
      t.string :password_digest
      t.references :pokemon, foreign_key: true

      t.timestamps
    end
  end
end
