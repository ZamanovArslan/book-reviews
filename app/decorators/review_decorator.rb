class ReviewDecorator < Draper::Decorator
  delegate_all
  decorates_association :comments, with: CommentsDecorator

  def formated_rating
    object.rating.to_s + " / 10"
  end

  def short_text
    object.text.truncate(200)
  end

  def short_title
    object.title.truncate(50)
  end

  def increment_views
    object.views ||= 0
    object.views += 1
    object.save
  end

  def draft_display
    return "Draft" if object.is_draft

    ""
  end
end
