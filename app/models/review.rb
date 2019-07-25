class Review < ApplicationRecord
  belongs_to :user, validate: true
  default_scope { order(created_at: :desc) }
  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
  validates :title, :text, :rating, presence: true
  paginates_per 6
  has_many :comments, dependent: :destroy

  def self.finished_reviews
    where(is_draft: false)
  end
end
