class ReviewsController < ApplicationController
  expose :reviews, lambda {
    authorize! fetch_reviews
    ReviewDecorator.decorate_collection(fetch_reviews)
  }
  expose :review, decorate: lambda { |review|
    authorize! review
    ReviewDecorator.new(review)
  }
  before_action :authenticate_user!

  REVIEW_PARAMS = %i[title text rating is_draft].freeze

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

  def fetch_reviews
    user.filtered_reviews(params).page(params[:page])
  end

  def user
    result = if params[:user_nickname].nil?
      current_user
    else
      User.find_by(nickname: params[:user_nickname])
    end
    UserDecorator.new(result)
  end
end
