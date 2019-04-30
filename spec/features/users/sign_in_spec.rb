require 'rails_helper'

feature "User logs in and logs out" do

  # `js: true` spec metadata means this will run using the `:selenium`
  # browser driver configured in spec/support/capybara.rb
  scenario "with correct details", js: true do

    create(:user, email: "someone@example.tld", password: "somepassword")

    visit "/"

    click_link "Sign in"
    expect(current_path).to eq(new_user_session_path)

    login "someone@example.tld", "somepassword"

    expect(page).to have_content "Create review"
    expect(page).to have_content "Hello, someone@example.tld"

    click_button "Sign out"

    expect(current_path).to eq "/"
    expect(page).to have_content "Sign in"

  end
end
