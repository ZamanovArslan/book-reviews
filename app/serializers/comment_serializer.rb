class CommentSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :text, :review_id, :created_at_format, :can_modify?
  def created_at_format
    object.created_at_format
  end

  def can_modify?
    current_user.admin? || (current_user.id == object.user_id)
  end
end
