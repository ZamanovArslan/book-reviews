class UserDecorator < Draper::Decorator
  delegate_all
  decorates_finders

  def drafts(params = nil)
    object.reviews.where("is_draft = true")
  end
end
