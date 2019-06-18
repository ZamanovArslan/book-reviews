class Comment < ApplicationRecord
  belongs_to :review, validate: true
  belongs_to :user, validate: true
  validates :text, presence: true
  default_scope { order(created_at: :asc) }
end
