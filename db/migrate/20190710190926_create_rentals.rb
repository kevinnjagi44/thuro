class CreateRentals < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.integer :renter_id, null: false
      t.integer :car_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.string :status, null: false
      t.timestamps
    end
    add_index :rentals, :renter_id
    add_index :rentals, :car_id
  end
end
