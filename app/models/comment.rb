class Comment < ApplicationRecord
  belongs_to :review, validate: true
  belongs_to :user, validate: true
  default_scope { order(created_at: :asc) }
end
