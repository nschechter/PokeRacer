class AddActiveToRace < ActiveRecord::Migration[5.0]
  def change
    add_column :races, :is_active, :boolean
  end
end
