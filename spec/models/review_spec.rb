require "rails_helper"

RSpec.describe Review, type: :model do
  context "without user" do
    it "can't be added" do
      review = build(:review)
      expect { review.save! }.to raise_error
    end
  end
end
