require "rails_helper"

describe "Sign In" do
  let(:user) { create :user }

  def sign_in(email, password)
    visit new_user_session_path

    fill_in :user_email, with: email
    fill_in :user_password, with: password

    click_button "Sign in"
  end

  it "Guest signs in with valid credentials" do
    sign_in(user.email, user.password)

    expect(page).to have_content("My profile")
  end
end
