class MyReviewsController < ApplicationController
  expose :reviews, -> { ReviewDecorator.decorate_collection(fetch_reviews) }
  expose :review, decorate: ->(review) { ReviewDecorator.new(review) }
  REVIEW_PARAMS = %i[created_at is_draft rating].freeze

  def index
    render "reviews/index"
  end

  private

  def fetch_reviews
    current_user.reviews(review_params).page(params[:page])
  end

  def review_params
    params.permit(*REVIEW_PARAMS)
  end
end
