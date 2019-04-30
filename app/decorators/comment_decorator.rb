class CommentDecorator < Draper::Decorator
  delegate_all

  def created_at_format
    object.created_at.strftime("%F")
  end
end
