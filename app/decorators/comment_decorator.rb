class CommentDecorator < Draper::Decorator
  delegate_all
  decorates_association :review

  def created_at_format
    object.created_at.strftime("%F%I:%M%p")
  end

end
