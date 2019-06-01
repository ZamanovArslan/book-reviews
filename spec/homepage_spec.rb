require "rails_helper"

describe "Root" do
  before do
    # Do nothing
  end

  after do
    # Do nothing
  end

  context "when visited" do
    it "displays index.html.slim" do
      visit "/"

      expect(page).to have_text("Hello, world!")
    end
  end
end
