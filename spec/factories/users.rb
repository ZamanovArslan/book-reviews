FactoryBot.define do
  factory :user do
    email { generate(:email) }
    confirmed_at { Time.zone.now }
  end
end
