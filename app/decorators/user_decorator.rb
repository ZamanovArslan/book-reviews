class UserDecorator < Draper::Decorator
  delegate_all
  decorates_association :reviews

  def drafts
    reviews.where(is_draft: true)
  end

  def role
    return "Admin" if object.admin?

    "Reviewer"
  end

  def average_rating
    sum = 0
    # TODO: cache?
    reviews.each { |review| sum += review.rating }
    "#{sum / reviews.count} \\ 10"
  end

  def last_reviews(count)
    reviews.order(created_at: :desc).limit(count)
  end

  def finished_reviews
    reviews.where(is_draft: false)
  end

  def filtered_reviews(params)
    return drafts.page(params[:page]) if params[:is_draft] == "true"

    finished_reviews.page(params[:page])
  end
end
