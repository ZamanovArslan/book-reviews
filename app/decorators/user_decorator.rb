class UserDecorator < Draper::Decorator
  delegate_all
  decorates_finders
  decorates_association :reviews, with: ReviewsDecorator

  def drafts
    reviews.where(is_draft: true).order(:created_at)
  end
end
