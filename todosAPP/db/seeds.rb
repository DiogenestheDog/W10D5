# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
  t1 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t2 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t3 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t4 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t5 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t6 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t7 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t8 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t9 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t10 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t11 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t12 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t13 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t14 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t15 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t16 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t17 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t18 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t19 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t20 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)
  t21 = Todo.create!(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, done: Faker::Boolean.boolean)

end
