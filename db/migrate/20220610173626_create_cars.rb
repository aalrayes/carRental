class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :model
      t.string :make
      t.string :year
      t.decimal :price, precision: 2, scale: 2
      t.string :fuel
      t.string :kmTraveled
      t.string :latitude
      t.string :longitude
      t.string :images, array:true
      t.integer :doors
      t.string :engine
      t.datetime :availableFrom
      t.datetime :availableUntil
      t.string :slug
      t.timestamps
    end
  end
end
