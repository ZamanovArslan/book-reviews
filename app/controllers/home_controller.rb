class HomeController < ApplicationController
  expose :reviews, -> { ReviewDecorator.decorate_collection(fetch_popular_reviews(3)) }

  def fetch_popular_reviews(count)
    Review.finished_reviews.reorder(views: :desc).take(count)
  end
end
