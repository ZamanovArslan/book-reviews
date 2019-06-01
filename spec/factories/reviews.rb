FactoryBot.define do
  factory :review do
    title { FFaker::Lorem.phrase }
    text { FFaker::Lorem.paragraph }
    rating { 5 }
  end
end