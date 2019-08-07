# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





  Stock.destroy_all
  User.destroy_all

  User.create!(email: "demo@demo.com", password:"longpassword", first_name: "Demo", last_name:"user")


  File.open("entry_data.txt").each do |line|
    stock = JSON.parse(line)
    stock["employees"] = stock["employees"].delete(",").to_i if stock["employees"]
    Stock.create(stock)
  end
