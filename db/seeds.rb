require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


(1..10).each do |id| 
    Car.create({
    model: Faker::Vehicle.make,
    make: Faker::Vehicle.model,
    year: Faker::Vehicle.year,
    price: Faker::Number.decimal(l_digits: 3, r_digits: 2),
    fuel: Faker::Vehicle.fuel_type,
    kmTraveled: Faker::Vehicle.kilometrage,
    latitude: Faker::Address.latitude,
    longitude:Faker::Address.longitude, 
    images:'https://imgd.aeplcdn.com/642x336/n/cw/ec/110233/2022-camry-exterior-right-front-three-quarter.jpeg?isig=0&q=75',
    doors: Faker::Vehicle.door_count,
    engine:Faker::Vehicle.engine,
    # Random date in the future (up to maximum of N days)
    availableFrom:Faker::Date.forward(days: 20),
    # Random date between dates
    availableUntil: Faker::Date.between(from: 1.month.from_now, to: 3.month.from_now), 
    slug: Faker::Alphanumeric.alpha(number: 10),
})
end