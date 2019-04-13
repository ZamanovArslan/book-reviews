class ReviewsController < ApplicationController
  expose_decorated :reviews, ->{ fetch_reviews }
  expose_decorated :review
  before_action :authenticate_user!

  REVIEW_PARAMS = %i[title text rating].freeze

  def create
    review.user = current_user
    if review.save
      redirect_to review_path(review)
    else
      render :new
    end
  end

  def update
    if review.update(review_params)
      redirect_to review_path(review)
    else
      render :edit
    end
  end

  def destroy
    review.destroy
    redirect_to user_reviews_url(current_user)
  end

  private

  def review_params
    params.require(:review).permit(*REVIEW_PARAMS)
  end

  def fetch_reviews
    User.find_by(nickname: params[:user_nickname]).reviews.order(:created_at).page(params[:page])
  end
end
