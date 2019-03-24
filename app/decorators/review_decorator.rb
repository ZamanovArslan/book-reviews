class ReviewDecorator < Draper::Decorator
  delegate_all
  decorates_association :comment, with: CommentDecorator

  def self.collection_decorator_class
    PaginatingDecorator
  end

  def formated_rating
    object.rating.to_s + ' / 10'
  end

  def short_text
    object.text.truncate(200)
  end
end
