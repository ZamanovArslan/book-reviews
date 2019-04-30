class Comment < ApplicationRecord
  belongs_to :review
  has_one :user, through: :review
  default_scope { order(created_at: :asc) }

end
