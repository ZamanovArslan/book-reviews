class ReviewsController < ApplicationController
  expose :reviews, -> do
    authorize! fetch_reviews
    ReviewDecorator.decorate_collection(fetch_reviews)
  end
  expose :review, decorate: ->(review) do
    authorize! review
    ReviewDecorator.new(review)
  end
  before_action :authenticate_user!

  REVIEW_PARAMS = %i[title text rating is_draft].freeze
  SEARCH_PARAMS = %i[rating is_draft].freeze

  def show
    review.increment_views
  end

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

  def search_params
    params.permit(*SEARCH_PARAMS)
  end

  def fetch_reviews
    if params[:is_draft] == "true"
      return user.drafts.page(params[:page])
    end
    user.finished_reviews.page(params[:page])
  end

  def user
    result ||= User.find_by(nickname: params[:user_nickname]) || current_user
    UserDecorator.new(result)
  end
end
