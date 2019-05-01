class ReviewPolicy < ApplicationPolicy
  def show?
    !record.is_draft || record.user_id == user.id
  end
end
