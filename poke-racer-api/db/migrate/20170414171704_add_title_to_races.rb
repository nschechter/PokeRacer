class AddTitleToRaces < ActiveRecord::Migration[5.0]
  def change
    add_column :races, :title, :string
  end
end
