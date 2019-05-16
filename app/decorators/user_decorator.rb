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
    finished_reviews.each { |review| sum += review.rating }
    result = sum.to_f / finished_reviews.count
  end

  def standard_deviation
  aver_rating = average_rating
    sum = 0
    finished_reviews.each { |review| sum += (review.rating - aver_rating)**2 }
    result = Math.sqrt(sum.to_f / finished_reviews.length)
    format('%.2f', result)
  end

  def last_reviews(count)
    finished_reviews.take(count)
  end

  def finished_reviews
    reviews.where(is_draft: false)
  end

  def filtered_reviews(params)
    return drafts if params[:is_draft] == "true"

    finished_reviews
  end

  def popular_reviews(count)
    ReviewsDecorator.new finished_reviews.reorder(views: :desc).take(count)
  end

  def my_avatar(size)
    if avatar.attached?
      avatar.variant(resize: "#{size}x#{size}!")
    else
      # TODO:
      gravatar_image_tag(object.email, size: size)
    end
  end
end
