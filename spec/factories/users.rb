FactoryBot.define do
  pass = "1234567"
  factory :user do
    nickname { FFaker::InternetSE.login_user_name }
    email { FFaker::Internet.email }
    password { pass }
    encrypted_password { BCrypt::Password.create(pass) }
  end
end
