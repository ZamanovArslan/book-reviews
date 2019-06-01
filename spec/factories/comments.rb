FactoryBot.define do
  factory :comment do
    text { FFaker::Lorem.paragraph }
  end
end