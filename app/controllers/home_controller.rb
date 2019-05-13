class HomeController < ApplicationController
  expose :reviews, -> { ReviewDecorator.decorate_collection(fetch_popular_reviews(3)) }
  # Client.where("created_at >= :start_date AND created_at <= :end_date",
  # {start_date: params[:start_date], end_date: params[:end_date]})
  # Client.where(created_at: (Time.now.midnight - 7.day)..Time.now.midnight)
  def fetch_popular_reviews(count)
    # .where(created_at: (Time.now.midnight - 10.day)..Time.now.midnight)
    Review.finished_reviews.reorder(views: :desc).take(count)
  end
end
