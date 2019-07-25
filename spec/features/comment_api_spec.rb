require "rails_helper"

describe "Comment API controller" do
  include_context "when user signed in"
  let(:review) { build(:review, user: user) }
  let(:comment) { build(:comment, user: user, review: review) }

  context "when gets POST request" do
    it "creates new comment" do
      review.save

      visit(review_path(review))
      fill_in :comment_text, with: comment.text
      click_button "Create Comment"

      expect(page).to have_content(comment.text)
    end
  end
end
