# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Fortune.create! quotation: 'I hear and I forget. I see and I remember. I do and I understand.'
# Fortune.create! quotation: 'Everything has its beauty but not everyone sees it.'
# Fortune.create! quotation: 'It does not matter how slowly you go so long as you do not stop.'
# Fortune.create! quotation: 'Study the past if you would define the future.'

platitudes = File.readlines(Rails.root.join('db', 'platitudes.u8'), "\n%\n")
#platitudes = File.readlines('/usr/share/games/fortune/platitudes.u8', "\n%\n")

platitudes.map do |p|
  reg = /\t?(.+)\n\t\t--\s*(.*)\n%\n/m
  m = p.match(reg)
  if m
    Fortune.create :quotation => m[1], :source => m[2]
  else
    Fortune.create :quotation => p[0..-4], :source => Faker::Name.name
  end
end
