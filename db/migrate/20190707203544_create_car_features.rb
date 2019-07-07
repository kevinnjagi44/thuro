class CreateCarFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :car_features do |t|
      t.integer :feature_id, null: false
      t.integer :car_id, null: false
      t.timestamps
    end
    add_index :car_features, :feature_id
    add_index :car_features, :car_id
  end
end
